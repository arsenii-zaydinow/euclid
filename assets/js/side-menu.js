document.addEventListener('DOMContentLoaded', () => {
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions')

    document.querySelector('.header-container__burger-menu').addEventListener('click', function() {
        this.classList.add('header-container__burger-menu_active');
        document.body.style.overflow = 'hidden';
        document.querySelector('.overlay').classList.add('overlay_active');
        document.querySelector('.burger-menu').classList.add('burger-menu_opened');
    });

    document.querySelector('.burger-menu__close-icon').addEventListener('click', function(event) {
        closeMenu();
        event.stopPropagation();
    });

    document.querySelector('.overlay').addEventListener('click', function() {
        closeMenu();
    });

    document.querySelectorAll('.burger-menu__navigation-link').forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    const closeMenu = () => {
        document.querySelector('.header-container__burger-menu').classList.remove('header-container__burger-menu_active');
        document.body.style.overflow = 'scroll';
        document.querySelector('.overlay').classList.remove('overlay_active');
        document.querySelector('.burger-menu').classList.remove('burger-menu_opened');
    };
});