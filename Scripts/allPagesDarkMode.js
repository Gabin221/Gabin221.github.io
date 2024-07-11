const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const logo = document.getElementById('logoTopBar');

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    toggleButton.textContent = theme === 'dark' ? '🌞' : '🌙';
    logo.src = theme === 'dark' ? '../../Images/logo_home_page_dark.png' : '../../Images/logo_home_page.png';
}

const savedTheme = sessionStorage.getItem('mode');
if (savedTheme) {
    setTheme(savedTheme);
}

toggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    sessionStorage.setItem('mode', newTheme);
});