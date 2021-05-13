document.addEventListener('DOMContentLoaded', () => {
    const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'hero-container__circle',
            bulletActiveClass: 'hero-container__circle_active',
            clickable: true
        },
    });
});