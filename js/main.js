document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.querySelector(".header__language-switcher"),
        langButton = document.querySelector(".header__language-button"),
        langOptions = document.querySelector(".header__language-options"),
        langOptionButtons = document.querySelectorAll(".header__language-option"),
        selectedLangFlag = document.getElementById("selected-lang-flag"),
        selectedLangText = document.getElementById("selected-lang-text"),
        selectMenu = document.querySelector(".select-menu"),
        selectButton = selectMenu.querySelector(".select-menu__button"),
        options = selectMenu.querySelectorAll(".select-menu__option"),
        selectButtonText = selectMenu.querySelector(".select-menu__button-text"),
        menuIcon = document.querySelector(".hamburger");

  let selectedLang = "en";

  langButton.addEventListener("click", () => {
    langSwitcher.classList.toggle("active");
    langOptions.style.display = langSwitcher.classList.contains("active") ? "block" : "none";
  });

  langOptionButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedLang = button.dataset.lang;
      updateSelectedLang();
      langSwitcher.classList.remove("active");
      langOptions.style.display = "none";
    });
  });

  function updateSelectedLang() {
    langOptionButtons.forEach(button => {
      button.classList.toggle("selected", button.dataset.lang === selectedLang);
      button.style.display = button.dataset.lang === selectedLang ? "none" : "block";
    });
    selectedLangFlag.src = selectedLang === "en" ? "./photo/icon/GB.png" : "./photo/icon/RU.png";
    selectedLangText.textContent = selectedLang === "en" ? "English" : "Russian";
  }

  updateSelectedLang();

  selectButton.addEventListener("click", () => {
    selectMenu.classList.toggle("select-menu--active");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      selectButtonText.innerText = option.querySelector(".select-menu__option-text").innerText;
      selectMenu.classList.remove("select-menu--active");
    });
  });

  menuIcon.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("active");
    document.querySelector("#hamburger").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
});
