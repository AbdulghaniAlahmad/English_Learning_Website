const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,set,ref,child } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth , signInWithEmailAndPassword ,sendPasswordResetEmail ,GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";



 
const firebaseConfig = {
  apiKey: "AIzaSyBlm84e_TWmrF71V3jdFVzk8r3cSaYvygw",
  authDomain: "login-tasarim.firebaseapp.com",
  projectId: "login-tasarim",
  storageBucket: "login-tasarim.appspot.com",
  messagingSenderId: "997145491587",
  appId: "1:997145491587:web:5ed171cc1ffd847d2843b6"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref= ref(db);
const provider= new GoogleAuthProvider();
auth.languageCode = 'en';



let EmailInp = document.getElementById("email");
let PassInp = document.getElementById("password");
let mainform = document.getElementById("mainform");
let ForgotPassLabel = document.getElementById("forgotpasslabel");



let LogIn = evt =>{
    evt.preventDefault();

    signInWithEmailAndPassword(auth , EmailInp.value , PassInp.value )
    .then((Credentials)=>{

       window.location.replace('Home.html');
    })

    .catch((error)=>{
        alert("Email or Password is incorrect");
        console.log(error.code);
        console.log(error.message);
    })

  }

    let ForgotPassword =()=>{
      sendPasswordResetEmail(auth,EmailInp.value)
      .then(()=>{
   alert("E-postanıza şifre sıfırlama bağlantısı gönderildi")

})
}

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click" ,function(){
  
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="../Home.html";
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;    
  });
})
mainform.addEventListener('submit' ,LogIn );
ForgotPassLabel.addEventListener('click',ForgotPassword)











       