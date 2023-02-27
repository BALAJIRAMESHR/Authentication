import { createApp } from 'vue'
// import './style.css'
import App from './App.vue';
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQygkhxyvRHtMb37Y6nmEiBv9KrlXy_tA",
  authDomain: "carbon-b032f.firebaseapp.com",
  projectId: "carbon-b032f",
  storageBucket: "carbon-b032f.appspot.com",
  messagingSenderId: "940512469521",
  appId: "1:940512469521:web:396aa60c439c8f1bd5c7b0",
  measurementId: "G-Q11041NW2G"
};
initializeApp(firebaseConfig);


// createApp(App).mount('#app')
const app =createApp(App);

app.use(router);

app.mount('#app');