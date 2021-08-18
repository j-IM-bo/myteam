export function initTeamCards() {
    const teamToggle = document.querySelectorAll(".team-card__toggle"),
        cardActive = ".card-active";

    let isActive = false;

    teamToggle.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            console.log("working");

            isActive = !isActive;

            if (isActive) {
                toggle.classList.add(cardActive);
            } else {
                toggle.classList.remove(cardActive);
            }
        });
    });
}
