import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initTeamCards() {
    const teamCard = document.querySelectorAll(".team-card"),
        cardActiveClass = "card-active";

    let isActive = false;

    teamCard.forEach((card) => {
        // get toggle inside each card
        const teamToggle = card.querySelector(".team-card__toggle");

        // bind event
        teamToggle.addEventListener("click", (e) => {
            e.preventDefault;

            isActive = !isActive;

            if (isActive) {
                teamToggle.parentNode.classList.add(cardActiveClass);
            } else {
                teamToggle.parentNode.classList.remove(cardActiveClass);
            }
        });
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "a-team",
            start: "top",
            duration: 1
        }
    });
    tl.to(teamCard, { y: 0, stagger: 0.1, autoAlpha: 1 });
}
