document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerNav = document.querySelector('.hamburger-nav');

    menuToggle.addEventListener('click', function () {
        if (menuToggle.checked) {
            hamburgerNav.classList.add('show');
        } else {
            hamburgerNav.classList.remove('show');
        }
    });
});