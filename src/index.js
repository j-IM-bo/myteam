//css
import "./sass/style.scss";

//js
import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Flickity from "flickity";
// import { debounce } from "./js/utilities/debounce";
import { initMenu } from "./js/menu";
import { initHeroGlobal } from "./js/utilities/loadin";
import { initHero } from "./js/hero";
import { initFeatures } from "./js/features";
import { initCarousel } from "./js/testimonials";
import { initTeamCards } from "./js/team";

gsap.config({
    nullTargetWarn: false
});

// global variables
const heroTitle = document.querySelectorAll(".js-hero-title");
const carousel = document.getElementById("js-carousel");
const team = document.querySelector(".js-team");

function init() {
    initMenu();
    initHeroGlobal();

    if (typeof heroTitle != "undefined" && heroTitle != null) {
        initHero();
    }

    initFeatures();

    if (typeof carousel != "undefined" && carousel != null) {
        initCarousel();
    }

    initTeamCards();
}

window.addEventListener("load", function () {
    init();
});
