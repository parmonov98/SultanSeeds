export function initLanguageSwitcher({
  switcherSelector,
  buttonSelector,
  optionsSelector,
  optionSelector,
  flagSelector,
  textSelector,
  flagImages = {
    en: "./photo/icon/GB.png",
    ru: "./photo/icon/RU.png",
  },
  texts = {
    en: "English",
    ru: "Russian",
  },
}) {
  const langSwitcher = document.querySelector(switcherSelector),
    langButton = document.querySelector(buttonSelector),
    langOptions = document.querySelector(optionsSelector),
    langOptionButtons = document.querySelectorAll(optionSelector),
    selectedLangFlag = document.querySelector(flagSelector),
    selectedLangText = document.querySelector(textSelector);

  let selectedLang = "en";

  langButton.addEventListener("click", () => {
    langSwitcher.classList.toggle("active");
    langOptions.style.display = langSwitcher.classList.contains("active")
      ? "block"
      : "none";
  });

  langOptionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedLang = button.dataset.lang;
      updateSelectedLang();
      langSwitcher.classList.remove("active");
      langOptions.style.display = "none";
    });
  });

  function updateSelectedLang() {
    langOptionButtons.forEach((button) => {
      button.classList.toggle("selected", button.dataset.lang === selectedLang);
      button.style.display =
        button.dataset.lang === selectedLang ? "none" : "block";
    });
    selectedLangFlag.src = flagImages[selectedLang];
    selectedLangText.textContent = texts[selectedLang];
  }

  updateSelectedLang();
}