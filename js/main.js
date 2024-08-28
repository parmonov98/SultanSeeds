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

  // JavaScript to handle the custom select dropdown
  const selectDisplay = document.getElementById("selectedTopic");
  const optionsContainer = document.querySelector(".order__select-options");
  const optionsList = document.querySelectorAll(".order__select-option");

  selectDisplay.addEventListener("click", function () {
    optionsContainer.style.display =
      optionsContainer.style.display === "none" ||
      optionsContainer.style.display === ""
        ? "block"
        : "none";
  });

  optionsList.forEach((option) => {
    option.addEventListener("click", function () {
      selectDisplay.textContent = this.textContent;
      selectDisplay.setAttribute("data-value", this.getAttribute("data-value"));
      optionsContainer.style.display = "none";
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".order__select-wrapper")) {
      optionsContainer.style.display = "none";
    }
  });
});
