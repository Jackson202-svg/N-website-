import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } 
       from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// YOUR CONFIG HERE (The one you found in Project Settings)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADMGwj9tdJXBQuVdgP1qnk1PhRgWckXoI",
  authDomain: "finnhub-fc8d8.firebaseapp.com",
  projectId: "finnhub-fc8d8",
  storageBucket: "finnhub-fc8d8.firebasestorage.app",
  messagingSenderId: "321063636416",
  appId: "1:321063636416:web:8707092932102751b9cc25",
  measurementId: "G-L3YBMNLXM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('auth-message');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                message.innerText = "Login Successful! Redirecting...";
                window.location.href = "index.html"; // Send them home after login
            })
            .catch((error) => {
                message.style.color = "#ef4444";
                message.innerText = "Error: " + error.message;
            });
    });
}

// --- CHECK IF USER IS LOGGED IN ---
onAuthStateChanged(auth, (user) => {
    const navLinks = document.querySelector('.nav-links');
    if (user) {
        console.log("Logged in as:", user.email);
        // If logged in, you could add a "Logout" button or "Admin" link here
    } else {
        console.log("No user signed in.");
    }
});
