import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initMenu() {
    const body = document.querySelector(".js-body"),
        menu = document.querySelector(".js-menu"),
        overlay = document.querySelector(".js-overlay"),
        menuToggle = document.querySelector(".js-menu-btn"),
        menuNav = document.querySelector(".js-menu-nav"),
        stopScrollingClass = "stop-scrolling",
        isActiveClass = "menu-is-active",
        menuOpenTl = gsap.timeline({ paused: true }),
        menuCloseTl = gsap.timeline({ paused: true });

    let isActive = false;

    menuToggle.addEventListener("click", (e) => {
        e.preventDefault;

        // switch toggle state
        isActive = !isActive;

        if (isActive) {
            body.classList.add(stopScrollingClass);
            menuToggle.classList.add(isActiveClass);
            overlay.classList.add(isActiveClass);
            menu.classList.add(isActiveClass);
            menuNav.classList.add(isActiveClass);
        } else {
            body.classList.remove(stopScrollingClass);
            menuToggle.classList.remove(isActiveClass);
            overlay.classList.remove(isActiveClass);
            menu.classList.remove(isActiveClass);
            menuNav.classList.remove(isActiveClass);
        }
    });
}
