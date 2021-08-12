import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initFeatures() {
    const feature = document.querySelectorAll(".features__list");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".features__content",
            start: "top center"
        }
    });
    tl.from(feature, { autoAlpha: 0, y: 10, stagger: 0.3 });
}
