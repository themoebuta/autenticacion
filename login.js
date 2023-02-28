 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
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
const auth = getAuth();
alert("hola");
$("#registrar").click( function () {
    alert("Entro a la funcion");
    var email=$("#correoelectronico").val(); 
    var password=$("#contraseña").val();
    alert("correo es : "+email+" y contraseña es : "+ password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    alert("exito");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
    // ..
  });
 
})

$("#loguear").click( function () {

    alert("Entro a la funcion");
    var email=$("#correoelectronico").val(); 
    var password=$("#contraseña").val();
    alert("correo es : "+email+" y contraseña es : "+ password);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("exito");
    window.location.href="mainPage.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
  });
    
})


//AcL3V1DuYoT5MA0crQaJviiwvfh1

