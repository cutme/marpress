import css from './sass/style.scss';
import fonts from './MyFontsWebfontsKit.css';
import swiper from './sass/idangerous.swiper.scss';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Swiper from '../node_modules/swiper/dist/js/swiper.js';

require('./js/framework.js');


var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 4,
    freeMode: true,
     spaceBetween: 40,
});		

