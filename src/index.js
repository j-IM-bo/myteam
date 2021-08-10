//css
import "./sass/style.scss";

//js
// import { debounce } from "./js/utilities/debounce";
import { viewportSize } from "./js/utilities/viewportSize";

function init() {
    viewportSize();
}

window.addEventListener("load", function () {
    init();
});
