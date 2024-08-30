document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.querySelector(".header__language-switcher");
  const langButton = document.querySelector(".header__language-button");
  const langOptions = document.querySelector(".header__language-options");
  const langOptionButtons = document.querySelectorAll(
    ".header__language-option"
  );
  const selectedLangFlag = document.getElementById("selected-lang-flag");
  const selectedLangText = document.getElementById("selected-lang-text");

  let selectedLang = "en"; // Default selected language

  // Til almashtirgichni ochish/yopish
  langButton.addEventListener("click", () => {
    langSwitcher.classList.toggle("active");
    langOptions.style.display = langSwitcher.classList.contains("active")
      ? "block"
      : "none";
  });

  // Tilni tanlash
  langOptionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;

      // Tanlangan tilni yangilash
      selectedLang = lang;
      updateSelectedLang();

      // Til almashtirgichni yopish
      langSwitcher.classList.remove("active");
      langOptions.style.display = "none";
    });
  });

  function updateSelectedLang() {
    langOptionButtons.forEach((button) => {
      if (button.dataset.lang === selectedLang) {
        button.classList.add("selected");
        button.style.display = "none";
      } else {
        button.classList.remove("selected");
        button.style.display = "block";
      }
    });

    // Yangilangan tilni switcherda ko'rsatish
    if (selectedLang === "en") {
      selectedLangFlag.src = "./photo/icon/GB.png";
      selectedLangText.textContent = "English";
    } else if (selectedLang === "ru") {
      selectedLangFlag.src = "./photo/icon/RU.png";
      selectedLangText.textContent = "Russian";
    }
  }

  // Dastlabki tanlangan tilni yangilash
  updateSelectedLang();

  //Multiple options dropdown
  //https://codepen.io/gatoledo1/pen/QWmpWjK

  const selectMenu = document.querySelector(".select-menu"),
    selectButton = selectMenu.querySelector(".select-menu__button"),
    options = selectMenu.querySelectorAll(".select-menu__option"),
    selectButtonText = selectMenu.querySelector(".select-menu__button-text");

  selectButton.addEventListener("click", () => {
    selectMenu.classList.toggle("select-menu--active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(
        ".select-menu__option-text"
      ).innerText;
      selectButtonText.innerText = selectedOption;

      selectMenu.classList.remove("select-menu--active");
    });
  });

  // open menu
  const menuIcon = document.querySelector(".hamburger");
  menuIcon.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("active");
    document.querySelector("#hamburger").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
});
