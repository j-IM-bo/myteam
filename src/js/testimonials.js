import Flickity from "flickity";

import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initCarousel() {
    const flkty = new Flickity(".main-carousel", {
        cellAlign: "center",
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        wrapAround: true,
        resize: true,
        contain: true
    });

    flkty.resize();

    //prevent click from propagating on drag flickity f
    flkty.on("dragStart", () =>
        flkty.slider.childNodes.forEach(
            (slide) => (slide.style.pointerEvents = "none")
        )
    );

    flkty.on("dragEnd", () =>
        flkty.slider.childNodes.forEach(
            (slide) => (slide.style.pointerEvents = "all")
        )
    );

    // animation
    const cell = document.querySelectorAll(".carousel-cell");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".testimonials__inner",
            start: "top center"
        }
    });
    tl.from(cell, { duration: 1, y: 20, autoAlpha: 0 });
}
