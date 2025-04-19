
function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}

function toggleMenu() {
    const menu = document.getElementById('popupMenu');
    menu.classList.toggle('hidden');
}

function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
}
