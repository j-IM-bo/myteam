import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initHero() {
    const line1 = document.querySelector(".hero__title-mask:nth-child(1) div"),
        line2 = document.querySelector(".hero__title-mask:nth-child(2) div");

    gsap.to([line1, line2], {
        duration: 0.6,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1
    });
}
