const thumbnails = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    spaceBetween: 30,
    watchSlidesProgress: true,
    grabCursor: true
});

const slide = new Swiper('.slide-secoes', {
    speed: 800,
    grabCursor: true,
    thumbs: {
        swiper: thumbnails,
    }
});