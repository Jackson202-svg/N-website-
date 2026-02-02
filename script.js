// 1. Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        console.log("Menu toggled");
    });
}

// 2. Interaction for Hero Button
const ctaBtn = document.getElementById('cta-start');
ctaBtn.addEventListener('click', () => {
    // You can scroll to a section or link to a page
    window.location.hash = "#projects";
    alert("Navigating to Palmy Projects...");
});

// 3. Firebase Placeholder
// When you get your Firebase config from Google, you will paste it here.
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "palmy-dev.firebaseapp.com",
    projectId: "palmy-dev",
    // ... rest of your config
};

console.log("Palmy Dev Site Initialized.");
