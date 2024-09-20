export function initializeSelectMenus(selectMenuSelector) {
  const menuElements = document.querySelectorAll(selectMenuSelector);

  menuElements.forEach((menuElement) => {
    const button = menuElement.querySelector(".select-menu__button");
    const options = menuElement.querySelectorAll(".select-menu__option");
    const buttonText = menuElement.querySelector(".select-menu__button-text");

    if (button && buttonText) {
      button.addEventListener("click", (event) => {
        menuElement.classList.toggle("select-menu--active");
        event.stopPropagation();
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const optionText = option.querySelector(".select-menu__option-text");
          if (optionText) {
            buttonText.innerText = optionText.innerText;
            menuElement.classList.remove("select-menu--active");
          }
        });
      });
    }
  });

  document.addEventListener("click", (event) => {
    menuElements.forEach((menuElement) => {
      if (!menuElement.contains(event.target)) {
        menuElement.classList.remove("select-menu--active");
      }
    });
  });
}
