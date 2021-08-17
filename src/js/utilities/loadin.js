import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initLoadin() {
    console.log("working");
    const fadeIn = document.querySelector(".js-fade-in");

    // gsap.set([line1, line2], { yPercent: 100, autoAlpha: 0 });
    // gsap.to([line1, line2], {
    //     duration: 0.6,
    //     autoAlpha: 1,
    //     y: 0,
    //     stagger: 0.1
    // });
    gsap.to(fadeIn, { autoAlpha: 1 });
}
