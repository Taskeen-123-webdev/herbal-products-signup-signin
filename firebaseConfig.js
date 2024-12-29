// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDviEChdZkMPd5eMIV35bV-5J-NFHvnF10",
  authDomain: "formauthentication-76f2a.firebaseapp.com",
  projectId: "formauthentication-76f2a",
  storageBucket: "formauthentication-76f2a.firebasestorage.app",
  messagingSenderId: "1005974325440",
  appId: "1:1005974325440:web:a0ad899173af99e2e38525",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let firstName, lastName, email, password, repeatPassword;

function readForm() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  repeatPassword = document.getElementById("repeatPassword").value;
  console.log(firstName, lastName, email, password, repeatPassword);
}
document.getElementById("signUp").addEventListener("click", function (e) {
  e.preventDefault();
  readForm();

  if (!firstName || !lastName || !email || !password || !repeatPassword) {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== repeatPassword) {
    alert(`Password does'nt match`);
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert(`Welcome! ${firstName} ${lastName} Account has been created.`);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("repeatPassword").value = "";
      window.location.href = './login.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(`Error! ${errorMessage}`);
    });
});