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

const btnOpenDialog = document.querySelector(".open-dialog-video");
const modalDialogVideo = document.querySelector("#dialog-video") 
const btnFecharDialog = document.querySelector("#fecharDialogVideo");

btnOpenDialog.addEventListener("click", () => {
    modalDialogVideo.showModal();
});

btnFecharDialog.addEventListener("click", () => {
    modalDialogVideo.close();
});