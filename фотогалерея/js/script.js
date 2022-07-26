let slider1 = document.querySelector('.image-slider');

let mySwiper = new Swiper(slider1,{
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    simulateTouch: false,
    speed: 700,
    lazy: true,
    preloadImages: false,
    watchSlidesProgress: true,
    //autoHeight: true,
    watchOverflow: true,
    navigation: {
        nextEl: slider1.querySelector('.swiper-button-next'),
        prevEl: slider1.querySelector('.swiper-button-prev')
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //     renderBullet: function(index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     }
    // },

    hashNavigation: {
        watchState: true
    },

});


Fancybox.bind("[data-fancybox = 'slider1']", {
    infinite: false,
    animated: false,
    showClass: false,
    hideClass: false,
    dragToClose: false,
    closeButton: "top",

    Thumbs: false,
    Toolbar: false,

    Carousel: {
        Panzoom: {
            touch: false,
        },
    },

    Image: {
        zoom: false,
        wheel: false
    },
});