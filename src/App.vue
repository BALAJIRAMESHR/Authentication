<template>
  <router-view/>
  <nav>
  
  </nav> 
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";

const isLoggedIn =ref(false);
let auth;
onMounted(()=>{
  auth=getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user){
      isLoggedIn.value=true;
    }else{
      isLoggedIn.value=false;
    }
  });


});

const handleSignOut=()=>{
  signOut(auth).then(()=>{
    router.push("/");
  }) ;
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
