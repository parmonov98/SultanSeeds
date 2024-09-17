import { initLanguageSwitcher as e } from "./initLanguageSwitcher.js";
import { setupHamburgerMenu as t } from "./hamburgerMenuToggle.js";
import { initializeSelectMenus as l } from "./selectMenu.js";
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".order-form")) {
    const modal = document.querySelector(".modal-wrapper");
    const introButton = document.querySelector(".intro-content__button");
    const featuresButton = document.querySelector(".features__item-link");
    const toggleForm = (clickableItem, addToClass) => {
      clickableItem.addEventListener("click", () => {
        modal.classList.add(addToClass);
        document.body.classList.add("no-scroll");
      });
    };

    toggleForm(introButton, "show");
    toggleForm(featuresButton, "show");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-wrapper")) {
        modal.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  let s = document.querySelector(".nav-language-switcher"),
    a = new URLSearchParams(window.location.search),
    r = a.get("lang") || "ru",
    c = localStorage.getItem("language") || r;
  r !== c &&
    (a.set("lang", c),
    window.history.replaceState({}, "", `${window.location.pathname}?${a}`)),
    "ru" === c
      ? (s.classList.add("ru"), s.classList.remove("en"))
      : (s.classList.add("en"), s.classList.remove("ru")),
    s.addEventListener("click", () => {
      let e = s.classList.contains("ru") ? "ru" : "en",
        t = "ru" === e ? "en" : "ru";
      localStorage.setItem("language", t),
        a.set("lang", t),
        window.history.replaceState({}, "", `${window.location.pathname}?${a}`),
        s.classList.remove(e),
        s.classList.add(t);
    });
  let o = document.querySelector(".page-loader");
  o &&
    (document.body.classList.add("no-scroll"),
    o.classList.contains("hide")
      ? (o.classList.remove("hide"),
        document.body.classList.remove("no-scroll"),
        console.log("salom"))
      : setTimeout(() => {
          o.classList.add("hide"),
            o.classList.contains("hide") &&
              document.body.classList.remove("no-scroll");
        }, 5500));
  let i = document.querySelector(".social-menu");
  if (i) {
    let n = document.querySelector(".button-menu");
    n.addEventListener("click", () => {
      i.classList.toggle("active"), n.classList.toggle("disabled");
    });
  }
  e({
    switcherSelector: ".header__language-switcher",
    buttonSelector: ".header__language-button",
    optionsSelector: ".header__language-options",
    optionSelector: ".header__language-option",
    flagSelector: "#selected-lang-flag",
    textSelector: "#selected-lang-text",
  });
  let h = document.querySelector(".header__bottom");
  function v() {
    window.scrollY > 0
      ? h.classList.add("sticky")
      : h.classList.remove("sticky");
  }
  window.addEventListener("scroll", v),
    v(),
    l(".select-menu"),
    t(".hamburger", "header", "#hamburger", "no-scroll");
  let S = document.querySelectorAll(".facts__country-list li"),
    p = document.getElementById("country-map");
  if (!p) return;
  let E = () => {
      S.forEach((e) => e.classList.remove("active")),
        p.querySelectorAll("path").forEach((e) => e.classList.remove("active"));
    },
    f = document.getElementById("kz"),
    b = p.querySelector("#kz");
  f && b && (E(), f.classList.add("active"), b.classList.add("active")),
    S.forEach((e) => {
      e.addEventListener("click", () => {
        E(), e.classList.add("active");
        let t = e.id,
          l = p.querySelector(`#${t}`);
        l && l.classList.add("active");
      });
    }),
    p.querySelectorAll("path").forEach((e) => {
      e.addEventListener("click", (e) => {
        if ((E(), e.target.id)) {
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
      let e = p.querySelector(".active");
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
