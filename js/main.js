import { initLanguageSwitcher } from "./initLanguageSwitcher.js";
import { setupHamburgerMenu } from "./hamburgerMenuToggle.js";
import { initializeSelectMenu } from "./selectMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  // Modal ochish
  const openModal = document.querySelector(".faq__button");

  if (openModal) {
    openModal.addEventListener("click", () => {
      const modal = document.querySelector(".ask-modal");
      modal.classList.add("show");
      document.body.classList.add("no-scroll");

      // Modal ichidagi tugmalar va SVG uchun
      const closeModalButtons = modal.querySelectorAll(
        "svg, .ask-modal__button"
      );
      const askTextArea = document.querySelector("#ask");

      askTextArea.addEventListener("input", () => {
        document
          .querySelector(".ask-modal__button")
          .classList.toggle("disabled", askTextArea.value.length === 0);
      });

      closeModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          modal.classList.remove("show");
          document.body.classList.remove("no-scroll");
        });
      });

      // Modalning tashqarisidagi bosish uchun
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("show");
          document.body.classList.remove("no-scroll");
        }
      });
    });

    console.log(openModal);
  } else {
    console.log("Element topilmadi!");
  }

  // loader

  const loader = document.querySelector(".main-page-loader");
  loader.classList.add("show");

  setInterval(() => {
    loader.classList.remove("show");
  }, 5000);

  initLanguageSwitcher({
    switcherSelector: ".header__language-switcher",
    buttonSelector: ".header__language-button",
    optionsSelector: ".header__language-options",
    optionSelector: ".header__language-option",
    flagSelector: "#selected-lang-flag",
    textSelector: "#selected-lang-text",
  });

  initializeSelectMenu();
  setupHamburgerMenu(".hamburger", "header", "#hamburger", "no-scroll");

  const listItems = document.querySelectorAll(".facts__country-list li");
  const svg = document.getElementById("country-map");

  if (!svg) {
    console.error("SVG element topilmadi.");
    return;
  }

  const infoDiv = document.getElementById("country-info");

  const removeActive = () => {
    listItems.forEach((li) => li.classList.remove("active"));
    svg
      .querySelectorAll("path")
      .forEach((path) => path.classList.remove("active"));
  };

  const showInfo = (element, bbox) => {
    infoDiv.textContent = element.textContent;
    // infoDiv.style.display = "block";

    const svgRect = svg.getBoundingClientRect();
    const infoDivRect = infoDiv.getBoundingClientRect();
    const elementRect = bbox;

    const elementCenterX = elementRect.x + elementRect.width / 2;
    const elementCenterY = elementRect.y + elementRect.height / 2;

    let tooltipLeft = elementCenterX - infoDivRect.width / 2;
    let tooltipTop = elementCenterY - infoDivRect.height / 2;

    // Ekran chegaralaridan chiqmasligi uchun
    if (window.innerWidth > 1200) {
      // Katta ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft += 90;
      tooltipTop -= 50;
    } else if (window.innerWidth > 1024 && window.innerWidth <= 1200) {
      // O'rta katta ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 100; // Qo'shimcha joylash
      tooltipTop += 50; // Qo'shimcha joylash
    } else if (window.innerWidth > 900 && window.innerWidth <= 1024) {
      // O'rta kichik ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 160; // Qo'shimcha joylash
      tooltipTop += 50;
    } else if (window.innerWidth > 700 && window.innerWidth <= 900) {
      // Kichik ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 200; // Qo'shimcha joylash
      tooltipTop -= 5;
    } else if (window.innerWidth > 600 && window.innerWidth <= 700) {
      // Juda kichik ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 250; // Qo'shimcha joylash
      tooltipTop -= 5;
    } else if (window.innerWidth > 500 && window.innerWidth <= 600) {
      // Juda juda kichik ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 240; // Qo'shimcha joylash
      tooltipTop += 80;
    } else if (window.innerWidth > 400 && window.innerWidth <= 500) {
      // Juda juda kichik ekranlar uchun
      infoDiv.style.position = "absolute";
      tooltipLeft -= 260; // Qo'shimcha joylash
      tooltipTop += 90;
    } else if (window.innerWidth > 380 && window.innerWidth <= 400) {
      // Juda juda kichik ekranlar uchun (eng kichik)
      infoDiv.style.position = "absolute";
      tooltipLeft -= 280; // Qo'shimcha joylash
      tooltipTop += 100;
    } else {
      // Juda juda kichik ekranlar uchun (380px va undan kichik)
      infoDiv.style.position = "absolute";
      tooltipLeft -= 300; // Qo'shimcha joylash
      tooltipTop += 110;
    }

    // Tooltip joylashtirish
    tooltipLeft = Math.max(
      0,
      Math.min(window.innerWidth - infoDivRect.width, tooltipLeft)
    );
    tooltipTop = Math.max(
      0,
      Math.min(window.innerHeight - infoDivRect.height, tooltipTop)
    );

    infoDiv.style.left = `${tooltipLeft}px`;
    infoDiv.style.top = `${tooltipTop}px`;
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

  // accordion
  document.querySelectorAll(".faq-accordion__button").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // Close all other open contents
        document
          .querySelectorAll(".faq-accordion__content")
          .forEach((item) => (item.style.display = "none"));
        content.style.display = "block";
      }
    });
  });
});
