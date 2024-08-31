export function setupHamburgerMenu(menuSelector, headerSelector, hamburgerSelector, noScrollClass) {
    const menuIcon = document.querySelector(menuSelector);

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            document.querySelector(headerSelector).classList.toggle("active");
            document.querySelector(hamburgerSelector).classList.toggle("active");
            document.body.classList.toggle(noScrollClass);
        });
    } else {
        console.error(`Element "${menuSelector}" topilmadi.`);
    }
}
