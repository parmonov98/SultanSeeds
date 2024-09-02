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
      document.querySelector("body").classList.add("no-scroll");

      // Modal ichidagi tugmalar va SVG uchun
      const closeModalButtons = modal.querySelectorAll(
        "svg, .ask-modal__button"
      );

      const askTextArea = document.querySelector("#ask");

      askTextArea.addEventListener("input", () => {
        if (askTextArea.value.length > 0) {
          document
            .querySelector(".ask-modal__button")
            .classList.remove("disabled");
        } else {
          document
            .querySelector(".ask-modal__button")
            .classList.add("disabled");
        }
      });
      closeModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          modal.classList.remove("show");
          document.querySelector("body").classList.remove("no-scroll");
        });
      });

      // Modalning tashqarisidagi bosish uchun
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("show");
          document.querySelector("body").classList.remove("no-scroll");
        }
      });
    });

    console.log(openModal);
  } else {
    console.log("Element topilmadi!");
  }

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

  // const listItems = document.querySelectorAll(".facts__country-list li");
  // const svg = document.getElementById("country-map");

  // if (!svg) {
  //   console.error("SVG element topilmadi.");
  //   return;
  // }

  // const infoDiv = document.getElementById("country-info");

  // const removeActive = () => {
  //   listItems.forEach((li) => li.classList.remove("active"));
  //   svg.querySelectorAll("path").forEach((path) => {
  //     if (path.id) {
  //       path.classList.remove("active");
  //     }
  //   });
  // };

  // const showInfo = (element, bbox) => {
  //   infoDiv.textContent = element.textContent;
  //   infoDiv.style.display = "block";

  //   // SVG elementining markazini olish
  //   const svgRect = svg.getBoundingClientRect();

  //   // infoDiv elementining o'lchamini olish
  //   const infoDivRect = infoDiv.getBoundingClientRect();

  //   // infoDiv ni markazlashtirish va yuqoriga ko'chirish
  //   infoDiv.style.left = `${
  //     svgRect.left + bbox.x + bbox.width / 2 - infoDivRect.width / 2
  //   }px`;
  //   infoDiv.style.top = `${svgRect.top + bbox.y - infoDivRect.height - 10}px`; // 10px yuqoriga
  // };

  // const defaultId = "kz"; // Default davlat idsi
  // const defaultItem = document.getElementById(defaultId);
  // const defaultPath = svg.querySelector(`#${defaultId}`);

  // if (defaultItem && defaultPath) {
  //   removeActive();
  //   defaultItem.classList.add("active");
  //   defaultPath.classList.add("active");

  //   const bbox = defaultPath.getBBox();
  //   showInfo(defaultItem, bbox);
  // } else {
  //   infoDiv.style.display = "none";
  // }

  // listItems.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     removeActive();
  //     item.classList.add("active");

  //     const selectedId = item.id;
  //     const selectedPath = svg.querySelector(`#${selectedId}`);

  //     if (selectedPath) {
  //       selectedPath.classList.add("active");
  //       const bbox = selectedPath.getBBox();
  //       showInfo(item, bbox);
  //     } else {
  //       infoDiv.style.display = "none";
  //     }
  //   });
  // });

  // svg.querySelectorAll("path").forEach((path) => {
  //   path.addEventListener("click", (event) => {
  //     removeActive();

  //     if (event.target.id) {
  //       const selectedId = event.target.id;
  //       const selectedItem = document.getElementById(selectedId);

  //       if (selectedItem) {
  //         selectedItem.classList.add("active");
  //         const bbox = event.target.getBBox();
  //         showInfo(selectedItem, bbox);
  //       }

  //       event.target.classList.add("active");
  //     } else {
  //       infoDiv.style.display = "none";
  //     }
  //   });
  // });

  // document.addEventListener("click", (event) => {
  //   if (
  //     !event.target.closest("#country-map") &&
  //     !event.target.closest(".facts__country-list li")
  //   ) {
  //     infoDiv.style.display = "none";
  //   }
  // });

  // window.addEventListener("resize", () => {
  //   const activePath = svg.querySelector(".active");
  //   if (activePath) {
  //     const bbox = activePath.getBBox();
  //     showInfo(document.getElementById(activePath.id), bbox);
  //   }
  // });

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

    // SVG elementining o'lchami va pozitsiyasi
    const svgRect = svg.getBoundingClientRect();

    // `infoDiv` o'lchami
    const infoDivRect = infoDiv.getBoundingClientRect();

    // Tanlangan SVG elementining koordinatalari
    const elementRect = bbox;

    // Tanlangan SVG elementining markazi
    const elementCenterX = elementRect.x + elementRect.width / 2;
    const elementCenterY = elementRect.y + elementRect.height / 2;

    // Tooltip markazini hisoblash
    const tooltipLeft = svgRect.left + elementCenterX - infoDivRect.width / 2;
    const tooltipTop = svgRect.top + elementCenterY - infoDivRect.height / 2;

    // infoDiv ni joylashtirish
    infoDiv.style.position = "absolute";
    infoDiv.style.left = `${tooltipLeft}px`;
    infoDiv.style.top = `${tooltipTop}px`;
  };

  const debugInfo = () => {
    console.log("SVG element:", svg.getBoundingClientRect());
    console.log("Tooltip element:", infoDiv.getBoundingClientRect());
  };

  debugInfo();

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
        document.querySelectorAll(".faq-accordion__content").forEach((item) => {
          item.style.display = "none";
        });
        content.style.display = "block";
      }
    });
  });

  // yandex map
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [41.3432, 69.281497], // O'zbekiston, Toshkent, Yunusobod uchun koordinatlar
      zoom: 15, // Zoom darajasi
    });

    var myPlacemark = new ymaps.Placemark([41.3432, 69.281497], {
      balloonContent:
        "Republic of Uzbekistan, Tashkent, Yunusabad district, Center-4, 18-house, 37-office",
    });

    myMap.geoObjects.add(myPlacemark);
  }
});
