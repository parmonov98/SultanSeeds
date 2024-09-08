// selectMenu.js
export function initializeSelectMenu() {
    const selectMenu = document.querySelector(".select-menu");
    if (!selectMenu) return; // Agar selectMenu mavjud bo'lmasa, funksiya bajarilmaydi
  
    const selectButton = selectMenu.querySelector(".select-menu__button");
    const options = selectMenu.querySelectorAll(".select-menu__option");
    const selectButtonText = selectMenu.querySelector(".select-menu__button-text");
  
    if (!selectButton || !selectButtonText) return; // Agar kerakli elementlar mavjud bo'lmasa, funksiya bajarilmaydi
  
    selectButton.addEventListener("click", () => {
      selectMenu.classList.toggle("select-menu--active");
    });
  
    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectButtonText.innerText = option.querySelector(".select-menu__option-text").innerText;
        selectMenu.classList.remove("select-menu--active");
      });
    });
  }
  