 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCpqSS5puSW8Ba0kqOPBj0CVFsy4EazGuU",
   authDomain: "fir-app-prueba-bf1ab.firebaseapp.com",
   projectId: "fir-app-prueba-bf1ab",
   storageBucket: "fir-app-prueba-bf1ab.appspot.com",
   messagingSenderId: "124582412098",
   appId: "1:124582412098:web:4f568009220096154392db",
   measurementId: "G-60BK199GDH"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 // Inicializar Auth de Firebase 
 const auth = firebase.auth();

function registrarUsuario() {
    var email=document.getElementById("correoElectronico").value();
    var contraseña=document.getElementById("contraseña").value();

    firebase.auth().createUserWithEmailAndPassword(email,contraseña).then(
        (userCredential)=>{
            // iniciar sesion
            var user=userCredential.user;

        }).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
        })
    
}

function loguearUsuario() {
    var email=document.getElementById("correoElectronico").value();
    var contraseña=document.getElementById("contraseña").value();

    
    firebase.auth().signInWithEmailAndPassword(email,contraseña).then(
        (userCredential)=>{
            // iniciar sesion
            var user=userCredential.user;

        }).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
        })
    
}

function cerrarSesion(){
    firebase.auth().signOut().then(()=>{
        // cierre de sesion exitoso
    }).catch((error)=>{
        // Hubo un error en el cierre de sesion
    })
}

function estadoDeSesion() {
    firebase.auth.onAuthStateChange((user)=>{
        if(user){
            // usuario esta conectado

            var uid=user.uid;
        }
        else{
            // usuario esta desconectado

        }
    })
    
}