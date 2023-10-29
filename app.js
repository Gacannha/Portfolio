let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let navBar = document.getElementById('navbar');
let outside = document.getElementById('outside');
let nameContainer = document.getElementById('nameContainer');
let aboutText = document.getElementById('aboutText');
let tech = document.getElementById('tech');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    navBar.classList.add('dark');
    outside.classList.add('dark');
    nameContainer.classList.add('dark');
    aboutText.classList.add('dark');
    tech.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    navBar.classList.remove('dark');
    outside.classList.remove('dark');
    nameContainer.classList.remove('dark');
    aboutText.classList.remove('dark');
    tech.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}