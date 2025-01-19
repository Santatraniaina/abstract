document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerNav = document.querySelector('.hamburger-nav');
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const toggleMenu = () => {
        if (mediaQuery.matches) {
            // Show or hide the menu based on the checkbox state
            hamburgerNav.classList.toggle('show', menuToggle.checked);
        } else {
            // Ensure the menu is hidden when screen width exceeds 1024px
            hamburgerNav.classList.remove('show');
        }
    };

    // Attach event listeners for checkbox toggle and screen resize
    menuToggle.addEventListener('change', toggleMenu);
    mediaQuery.addEventListener('change', toggleMenu);

    // Initial call to set the correct state on page load
    toggleMenu();
});
