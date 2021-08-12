//css
import "./sass/style.scss";

//js
// import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Flickity from "flickity";
// import { debounce } from "./js/utilities/debounce";
import { viewportSize } from "./js/utilities/viewportSize";
import { initMenu } from "./js/menu";
import { initHero } from "./js/hero";
import { initFeatures } from "./js/features";
import { initcarousel } from "./js/testimonials";

function init() {
    viewportSize();
    initMenu();
    initHero();
    initFeatures();
    initcarousel();
}

window.addEventListener("load", function () {
    init();
});
