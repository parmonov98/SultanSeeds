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

  // about facts script

  const listItems = document.querySelectorAll(".facts__country-list li");
  const svg = document.getElementById("country-map");
  
  if (!svg) {
    console.error("SVG element topilmadi.");
    return;
  }
  
  const infoDiv = document.getElementById("country-info");
  
  const removeActive = () => {
    listItems.forEach((li) => li.classList.remove("active"));
    svg.querySelectorAll("path").forEach((path) => {
      if (path.id) {
        path.classList.remove("active");
      }
    });
  };
  
  const showInfo = (element, bbox) => {
    infoDiv.textContent = element.textContent;
    infoDiv.style.display = "block";
  
    // SVG elementining markazini olish
    const svgRect = svg.getBoundingClientRect();
  
    // infoDiv elementining o'lchamini olish
    const infoDivRect = infoDiv.getBoundingClientRect();
  
    // infoDiv ni markazlashtirish va yuqoriga ko'chirish
    infoDiv.style.left = `${svgRect.left + bbox.x + bbox.width / 2 - infoDivRect.width / 2}px`;
    infoDiv.style.top = `${svgRect.top + bbox.y - infoDivRect.height - 10}px`; // 10px yuqoriga
  };
  
  const defaultId = "kz"; // Default davlat idsi
  const defaultItem = document.getElementById(defaultId);
  const defaultPath = svg.querySelector(`#${defaultId}`);
  
  if (defaultItem && defaultPath) {
    removeActive();
    defaultItem.classList.add("active");
    defaultPath.classList.add("active");
  
    const bbox = defaultPath.getBBox();
    showInfo(defaultItem, bbox);
  } else {
    infoDiv.style.display = "none";
  }
  
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive();
      item.classList.add("active");
  
      const selectedId = item.id;
      const selectedPath = svg.querySelector(`#${selectedId}`);
  
      if (selectedPath) {
        selectedPath.classList.add("active");
        const bbox = selectedPath.getBBox();
        showInfo(item, bbox);
      } else {
        infoDiv.style.display = "none";
      }
    });
  });
  
  svg.querySelectorAll("path").forEach((path) => {
    path.addEventListener("click", (event) => {
      removeActive();
  
      if (event.target.id) {
        const selectedId = event.target.id;
        const selectedItem = document.getElementById(selectedId);
  
        if (selectedItem) {
          selectedItem.classList.add("active");
          const bbox = event.target.getBBox();
          showInfo(selectedItem, bbox);
        }
  
        event.target.classList.add("active");
      } else {
        infoDiv.style.display = "none";
      }
    });
  });
  
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest("#country-map") &&
      !event.target.closest(".facts__country-list li")
    ) {
      infoDiv.style.display = "none";
    }
  });
  
  window.addEventListener("resize", () => {
    const activePath = svg.querySelector(".active");
    if (activePath) {
      const bbox = activePath.getBBox();
      showInfo(document.getElementById(activePath.id), bbox);
    }
  });
  
});
