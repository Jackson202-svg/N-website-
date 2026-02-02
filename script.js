import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } 
       from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. Palmy Team Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMGwj9tdJXBQuVdgP1qnk1PhRgWckXoI",
  authDomain: "finnhub-fc8d8.firebaseapp.com",
  projectId: "finnhub-fc8d8",
  storageBucket: "finnhub-fc8d8.firebasestorage.app",
  messagingSenderId: "321063636416",
  appId: "1:321063636416:web:8707092932102751b9cc25",
  measurementId: "G-L3YBMNLXM5"
};

// 2. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. Auth Observer: Controls UI based on Login State
onAuthStateChanged(auth, (user) => {
    const authStatus = document.getElementById('auth-status');
    const adminDashboard = document.getElementById('admin-dashboard');

    if (user) {
        // --- LOGGED IN ---
        console.log("Active Session:", user.email);
        
        if (authStatus) {
            authStatus.innerHTML = `<a href="#" id="logout-btn" style="color: #ef4444; font-weight: bold;">Logout</a>`;
            
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                signOut(auth).then(() => {
                    window.location.href = "index.html"; 
                });
            });
        }

        if (adminDashboard) {
            adminDashboard.style.display = "block";
        }

    } else {
        // --- LOGGED OUT ---
        if (authStatus) {
            authStatus.innerHTML = `<a href="login.html" class="login-link">Team Login</a>`;
        }
        
        if (adminDashboard) {
            adminDashboard.style.display = "none";
        }
    }
});

// 4. Login Form Logic (Runs on login.html)
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('auth-message');

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                message.style.color = "#38b
