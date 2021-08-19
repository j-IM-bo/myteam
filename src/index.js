//css
import "./sass/style.scss";

//js
import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

import { initMenu } from "./js/menu";
import { initHeroGlobal } from "./js/utilities/loadin";
import { initHero } from "./js/hero";
import { initFeatures } from "./js/features";
import { initCarousel } from "./js/testimonials";
import { initTeamCards } from "./js/team";
import { initForm } from "./js/form";

gsap.config({
    nullTargetWarn: false
});

// global variables
const heroTitle = document.querySelectorAll(".js-hero-title"),
    carousel = document.getElementById("js-carousel"),
    team = document.querySelector(".js-team"),
    form = document.querySelector("#js-form");

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

    if (typeof form != "undefined" && form != null) {
        initForm();
    }
}

window.addEventListener("load", function () {
    init();
});
