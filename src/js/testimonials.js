import Flickity from "flickity";

export function initcarousel() {
    const flkty = new Flickity(".js-carousel", {
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
}
