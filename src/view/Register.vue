<script>
</script>

<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p class="under">OR <br><div class="line">________</div></p>
    <img src="src/google.png"   @click="signinwithgoogle" width="0" height="30"> 
    <p><button @click="register" class="submit"> Submit</button></p>
    
    <p><button class="login" ><router-link to="/sign-in" style="text-decoration: none;">Login</router-link > </button></p>
</template>
<script setup>

import { ref } from  "vue";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {useRouter} from 'vue-router';
const email=ref("");
const password =ref ("");
const router=useRouter();


const register =() =>{
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
        console.log("Successfully register");
        router.push('/sign-in')
    })
    .catch((error)=>{
        console.log(error.code);
        alert(error.message);
    });

};

const signinwithgoogle =() => {
    const provider =  new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider)
        .then((result)=>{
            console.log(result.user);
            router.push("/sign-in")


        })
        .catch((error)=>{

        });
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
*:focus{
    outline:none;
}
img{
    position: relative;
    top:23px;
    left:46%;
    width:25px;
   
    
    
}

body{
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("https://rajaneditz.com/wp-content/uploads/2022/05/Polar-cb-editing-background-1-818x1024.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: 'roboto',sans-serif;
}

p{
    width: 400px;
    height: auto;
    color: #fff;
    font-family: 'roboto',sans-serif;

}
h1{
    text-transform: capitalize;
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 53px;
}
i{
    color: black;
    position: absolute;
    left: 120px;
}
input{
    width: 90% ;
    height: 65px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px auto;
    border-radius: 50px;
    background: rgba(255,255,255,0.3);
    border: none;
    padding: 20px;
    transition:.5s;
    font-size: large;
}
input {
  display: flex;
  flex-direction: column;
}


button{
    width: 82%; 
    height: 50px;
    display: block;
    margin: -46px auto;
    border-radius: 14px;
    background: rgba(255,255,255,0.3);
    border: none;
    padding: 20px;
    transition:.5s;
}
input::placeholder{
    color: #fff;

}
input:focus,
.submit:hover{
    background-color:#fff;
    color:black;
}
input:focus::placeholder{
    color: black;
}



button{
    
    width: 125px;
    padding: 0 20px;
    cursor: pointer;
    margin: 50px auto 0;

}

.link{
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    color: rgba(255,255,255,0.3);
    display: block;
    margin: 30px auto;


}
.under{
    position: relative;
    top: 12px;
    left:45%;
}
.line{
    position: relative;
    top: 0px;
    left: -21px; 
}

.link:hover{
    color: #fff;
}
.submit {
    position: relative;
    top:0rem;
    left:-7rem;
    width: 10rem;
}
.login{
    
    position: relative;
    top:-100px;
    left:6rem;
    width: 10rem;
    color:black;
    text-decoration: none;
    
} 
.login:hover{
    background-color: #fff;
    text-decoration: black;
}   
@media only screen and (max-width: 700px) {
    body{
        background: url("https://rajaneditz.com/wp-content/uploads/2022/05/Polar-cb-editing-background-1-818x1024.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    
    input {
    width: 10em;
    }
    button{
    width:10em;
  }
}


</style>

