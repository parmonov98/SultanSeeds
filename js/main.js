import { initLanguageSwitcher } from "./initLanguageSwitcher.js";
import { setupHamburgerMenu } from "./hamburgerMenuToggle.js";
import { initializeSelectMenu } from "./selectMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher({
    switcherSelector: ".header__language-switcher",
    buttonSelector: ".header__language-button",
    optionsSelector: ".header__language-options",
    optionSelector: ".header__language-option",
    flagSelector: "#selected-lang-flag",
    textSelector: "#selected-lang-text",
  });

  // select menu
  initializeSelectMenu();

  // menu
  setupHamburgerMenu(".hamburger", "header", "#hamburger", "no-scroll");
});
