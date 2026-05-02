const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');

// Toggle menu
hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation();
});

// Tutup menu jika klik di luar navbar
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
const bodyElement = document.body;

darkToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode-active');
    const isDark = bodyElement.classList.contains('dark-mode-active');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkToggle.innerText = isDark ? '☀️ Mode' : '🌙 Mode';
});

if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode-active');
    darkToggle.innerText = '☀️ Mode';
}

// Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en,id',
        includedLanguages: 'id,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
} 
