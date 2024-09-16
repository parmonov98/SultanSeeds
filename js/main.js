import { initLanguageSwitcher as e } from "./initLanguageSwitcher.js";
import { setupHamburgerMenu as t } from "./hamburgerMenuToggle.js";
import { initializeSelectMenus as l } from "./selectMenu.js";
document.addEventListener("DOMContentLoaded", () => {
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
  let d = document.querySelector(".modal-wrapper");
  if (d) {
    let u = document.querySelector(".intro-content__button"),
      g = document.querySelector(".features__item-link"),
      L = document.querySelector(".modal-wrapper button"),
      m = (e, t) => {
        e && t
          ? e.addEventListener("click", (e) => {
              d.classList.add(t), document.body.classList.add("no-scroll");
            })
          : null === e
          ? console.log("Bosiladigan item topilmadi")
          : null === t && console.log("Qo'shiladigan class yo'q");
      },
      y = (e, t) => {
        e.addEventListener("click", () => {
          d.classList.remove(t), document.body.classList.remove("no-scroll");
        });
      };
    d.addEventListener("click", (e) => {
      e.target === d &&
        (d.classList.remove("show"),
        document.body.classList.remove("no-scroll"));
    }),
      m(u, "show"),
      m(g, "show"),
      y(L, "show");
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

  // inputlarnga qiymat berilgan yoki yo'qligini tekshiruvchi script
  function checkInputs() {
    // input elementlarni olish
    const emailInputEl = document.querySelector(".form-emil"),
      selectEl = document.querySelector(".select-menu__button-text"),
      phoneInputEl = document.querySelector(".form-phone input"),
      messageEl = document.querySelector(".from-message textarea"),
      termsCheckboxEl = document.querySelector("#order-terms"),
      checkboxEl = document.querySelector("#order-checkbox");

      console.log();
      
  }
});
