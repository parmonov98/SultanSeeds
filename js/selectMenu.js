export function initializeSelectMenus(selectMenuSelector) {
    // Sahifadagi barcha select menu elementlarini olish
    const menuElements = document.querySelectorAll(selectMenuSelector);
  
    menuElements.forEach(menuElement => {
      // Har bir select menu elementidagi kerakli qismlarni olish
      const button = menuElement.querySelector(".select-menu__button");
      const options = menuElement.querySelectorAll(".select-menu__option");
      const buttonText = menuElement.querySelector(".select-menu__button-text");
  
      // Agar kerakli qismlar mavjud bo'lsa, hodisalarni qo'shish
      if (button && buttonText) {
        // Tugmani bosish orqali menyuni ochish yoki yopish
        button.addEventListener("click", () => {
          menuElement.classList.toggle("select-menu--active");
        });
  
        // Har bir variantni bosish orqali tugma matnini yangilash va menyuni yopish
        options.forEach(option => {
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
  }
  