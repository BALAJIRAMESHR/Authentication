import { createRouter,createWebHistory} from "vue-router";
import {getAuth,onAuthStateChanged} from "firebase/auth";

const router =createRouter({
    history:createWebHistory(),
    routes:[
        // {path:"/",component:() => import("../view/Home.vue")},
        {path:"/register",component:() => import("../view/Register.vue")},
        {path:"/sign-in",component:() => import("../view/Signin.vue")},
        {
            path:"/feed",
            component:() => import("../view/Feed.vue"),
            meta:{
                requireAuth:true,

            },
        },
    ],

});
const getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const removeListener=onAuthStateChanged(
            getAuth(),
            (user)=>{
              removeListener();
               resolve(user); 
            },
            reject
        );
    });
}

router.beforeEach(async(to,from,next)=>{
    if(to.matched.some((record)=>record.meta.requresAuth)){
            if (await getCurrentUser()){
                next();
            }else{
                alert("you dont have access!");
                next("/");
        

            }
    }else{
        next();
       
    }

})


export default router;