document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const opened = nav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(opened));
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            if (nav && menuToggle) {
                nav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});