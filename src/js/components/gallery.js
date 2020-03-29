import 'swiper/css/swiper.min.css';

const gallery = function () {
    var mySwiper = new Swiper.default('.swiper-container', {
        slides: 1,
        init: true,
        speed: 900,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
        
    });

    return mySwiper
}


export default gallery;