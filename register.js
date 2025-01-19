import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth , createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
 


  
 const firebaseConfig = {
   apiKey: "AIzaSyBlm84e_TWmrF71V3jdFVzk8r3cSaYvygw",
   authDomain: "login-tasarim.firebaseapp.com",
   projectId: "login-tasarim",
   storageBucket: "login-tasarim.appspot.com",
   messagingSenderId: "997145491587",
   appId: "1:997145491587:web:5ed171cc1ffd847d2843b6"
 };

 
 const app = initializeApp(firebaseConfig);
 const dp = getDatabase();
 const auth = getAuth(app);


 let EmailInp = document.getElementById("email");
 let PassInp = document.getElementById("password");
 let username = document.getElementById("text");
 let Mainform = document.getElementById("Mainform");

 let RegisterUser = evt =>{
     evt.preventDefault();

     createUserWithEmailAndPassword(auth , EmailInp.value , PassInp.value )
     .then((Credentials)=>{
        //gmail'e mesaj gondermek için kullandik
        sendEmailVerification(auth.currentUser)
        .then(() => {
        alert("Email verfication sent");
        });
        console.log(Credentials);
         
     })

     .catch((error)=>{
         alert(error.message);
         console.log(error.code);
         console.log(error.message);
     })


     document.querySelector('input[name="email"]').value = '';
     document.querySelector('input[name="password"]').value = '';
     document.querySelector('input[name="text"]').value = '';


 }
 Mainform.addEventListener('submit' ,RegisterUser );


