export const initializeCarousels = () => {
    new Swiper('#roversContent', {
        slidesPerView: 'auto'
    });

    new Swiper('#photosContent', {
        slidesPerView: 'auto',
    });
}