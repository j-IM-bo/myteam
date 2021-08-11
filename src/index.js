//css
import "./sass/style.scss";

//js
import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { debounce } from "./js/utilities/debounce";
import { viewportSize } from "./js/utilities/viewportSize";
import { initMenu } from "./js/menu";

function init() {
    viewportSize();
    initMenu();
}

window.addEventListener("load", function () {
    init();
});
