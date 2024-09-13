import { initLanguageSwitcher as e } from "./initLanguageSwitcher.js";
import { setupHamburgerMenu as t } from "./hamburgerMenuToggle.js";
import { initializeSelectMenus as l } from "./selectMenu.js";
document.addEventListener("DOMContentLoaded", () => {
  let a = document.querySelector(".faq__button");
  a
    ? (a.addEventListener("click", () => {
        let e = document.querySelector(".ask-modal");
        e.classList.add("show"), document.body.classList.add("no-scroll");
        let t = e.querySelectorAll("svg, .ask-modal__button"),
          l = document.querySelector("#ask");
        l.addEventListener("input", () => {
          document
            .querySelector(".ask-modal__button")
            .classList.toggle("disabled", 0 === l.value.length);
        }),
          t.forEach((t) => {
            t.addEventListener("click", () => {
              e.classList.remove("show"),
                document.body.classList.remove("no-scroll");
            });
          }),
          e.addEventListener("click", (t) => {
            t.target === e &&
              (e.classList.remove("show"),
              document.body.classList.remove("no-scroll"));
          });
      }),
      console.log(a))
    : console.log("Element topilmadi!");
  let s = document.querySelector(".nav-language-switcher"),
    r = new URLSearchParams(window.location.search),
    o = r.get("lang") || "ru",
    c = localStorage.getItem("language") || o;
  o !== c &&
    (r.set("lang", c),
    window.history.replaceState({}, "", `${window.location.pathname}?${r}`)),
    "ru" === c
      ? (s.classList.add("ru"), s.classList.remove("en"))
      : (s.classList.add("en"), s.classList.remove("ru")),
    s.addEventListener("click", () => {
      let e = s.classList.contains("ru") ? "ru" : "en",
        t = "ru" === e ? "en" : "ru";
      localStorage.setItem("language", t),
        r.set("lang", t),
        window.history.replaceState({}, "", `${window.location.pathname}?${r}`),
        s.classList.remove(e),
        s.classList.add(t);
    });

  // loader
  const loader = document.querySelector(".page-loader");
  const loaderStatus = localStorage.getItem("hide");
  if (loader) {
    document.body.classList.add("no-scroll");

    if (loaderStatus === "hide") {
      loader.classList.add("hide");
      document.body.classList.remove("no-scroll");
    } else {
      setTimeout(() => {
        loader.classList.add("hide");
        localStorage.setItem("hide", "hide");
        if (!loaderStatus) {
          document.body.classList.remove("no-scroll");
        }
      }, 5500);
    }
  }

  // modal
  const modal = document.querySelector(".modal-wrapper");
  if (modal) {
    const openModal = document.querySelector(".intro-content__button"),
      openModal2 = document.querySelector(".features__item-link"),
      closeModal = document.querySelector(".modal-wrapper button");

    const setClass = (clickableItem, classToAdd) => {
      clickableItem.addEventListener("click", () => {
        modal.classList.add(classToAdd);
        document.body.classList.add("no-scroll");
      });
    };

    const closeModalFunc = (clickableItem, classToRemove) => {
      clickableItem.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove(classToRemove);
        document.body.classList.remove("no-scroll");
      });
    };

    setClass(openModal, "show");
    setClass(openModal2, "show");

    closeModalFunc(closeModal, "show");
    closeModalFunc(modal, "show");
  }

  e({
    switcherSelector: ".header__language-switcher",
    buttonSelector: ".header__language-button",
    optionsSelector: ".header__language-options",
    optionSelector: ".header__language-option",
    flagSelector: "#selected-lang-flag",
    textSelector: "#selected-lang-text",
  });
  let n = document.querySelector(".header__bottom");
  function d() {
    window.scrollY > 0
      ? n.classList.add("sticky")
      : n.classList.remove("sticky");
  }
  window.addEventListener("scroll", d),
    d(),
    l(".select-menu"),
    t(".hamburger", "header", "#hamburger", "no-scroll");
  let u = document.querySelectorAll(".facts__country-list li"),
    g = document.getElementById("country-map");
  if (!g) {
    console.error("SVG element topilmadi.");
    return;
  }
  let m = () => {
      u.forEach((e) => e.classList.remove("active")),
        g.querySelectorAll("path").forEach((e) => e.classList.remove("active"));
    },
    y = document.getElementById("kz"),
    L = g.querySelector("#kz");
  y && L && (m(), y.classList.add("active"), L.classList.add("active")),
    u.forEach((e) => {
      e.addEventListener("click", () => {
        m(), e.classList.add("active");
        let t = e.id,
          l = g.querySelector(`#${t}`);
        l && l.classList.add("active");
      });
    }),
    g.querySelectorAll("path").forEach((e) => {
      e.addEventListener("click", (e) => {
        if ((m(), e.target.id)) {
          let t = e.target.id,
            l = document.getElementById(t);
          l && l.classList.add("active"), e.target.classList.add("active");
        }
      });
    }),
    document.addEventListener("click", (e) => {
      e.target.closest("#country-map") ||
        e.target.closest(".facts__country-list li");
    }),
    window.addEventListener("resize", () => {
      let e = g.querySelector(".active");
      if (e) {
        let t = e.getBBox();
        showInfo(document.getElementById(e.id), t);
      }
    }),
    document.querySelectorAll(".faq-accordion__button").forEach((e) => {
      e.addEventListener("click", () => {
        let t = e.nextElementSibling;
        "block" === t.style.display
          ? (t.style.display = "none")
          : (document
              .querySelectorAll(".faq-accordion__content")
              .forEach((e) => (e.style.display = "none")),
            (t.style.display = "block"));
      });
    });
});
