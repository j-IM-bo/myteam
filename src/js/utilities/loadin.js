import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initHeroGlobal() {
    // copy fade in
    const fadeIn = document.querySelector(".js-fade-in");
    gsap.to(fadeIn, { duration: 1, autoAlpha: 1 });

    // title move up
    const moveUp = document.querySelector(".js-title h1");
    gsap.to(moveUp, { duration: 0.6, y: 0 });
}
