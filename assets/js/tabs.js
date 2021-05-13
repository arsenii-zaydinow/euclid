document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.steps__item').forEach((stepBtn) => {
        stepBtn.addEventListener('click', (event) => {
            const clickedBtn = event.currentTarget;
            const path = clickedBtn.dataset.path;

            document.querySelectorAll('.steps__item').forEach((stepBtn) => {
                stepBtn.classList.remove('steps__item_selected');
            });
            clickedBtn.classList.add('steps__item_selected');

            document.querySelectorAll('.how-info-block').forEach((stepContent) => {
                stepContent.classList.remove('how-info-block_active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('how-info-block_active');
        });
    });
});