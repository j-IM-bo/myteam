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
import { initLoadin } from "./js/utilities/loadin";
import { initFeatures } from "./js/features";
import { initCarousel } from "./js/testimonials";

function init() {
    viewportSize();
    initLoadin();
    initMenu();
    initHero();
    initFeatures();
    initCarousel();
}

window.addEventListener("load", function () {
    init();
});
