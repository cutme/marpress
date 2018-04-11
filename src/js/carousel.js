import swiper from '../sass/idangerous.swiper.scss';
import Swiper from '../../node_modules/swiper/dist/js/swiper.js';

(function() {
    const mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        freeMode: true,
        spaceBetween: 40,
        breakpoints: {
            375: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
    });    
}).call(this);
