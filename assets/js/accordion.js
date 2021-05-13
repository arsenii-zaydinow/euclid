$(() => {
    const faqItem = $('.faq__item');

    faqItem.accordion({
        active: false,
        collapsible: true,
        header: '.faq__header',
        beforeActivate: function() {
            console.log('hello');
            $(this).toggleClass('faq__item_active');
        }
    });
});