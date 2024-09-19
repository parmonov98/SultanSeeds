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

  const htmlElement = document.documentElement;

  const langAttribute = htmlElement.getAttribute("lang");

  const lang = document.querySelectorAll(".nav-language-switcher a");

  console.log(lang);

  lang.forEach((lan) => {
    lan.getAttribute("data-lang");
    console.log(lan);

    if (lan.getAttribute("data-lang") === langAttribute) {
      lan.classList.add("selected");
    } else {
      lan.classList.remove("selected");
    }
  });
});

window.addEventListener("load", () => {
  let o = document.querySelector(".page-loader");

  const mediaElements = document.querySelectorAll('img, video');
  
  const promises = Array.from(mediaElements).map(element => {
    return new Promise((resolve) => {
      if (element.complete) {
        resolve();
      } else {
        element.onload = resolve;
        element.onerror = resolve;  // In case there's an error, resolve the promise to prevent blocking.
      }
    });
  });

  Promise.all(promises).then(() => {
    setTimeout(() => {
      o.classList.add("hide");
      document.body.classList.remove("no-scroll");
    }, 0);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll");
  const htmlElement = document.documentElement;

  const langAttribute = htmlElement.getAttribute("lang");

  const lang = document.querySelectorAll(".nav-language-switcher a");

  lang.forEach((lan) => {
    lan.getAttribute("data-lang");
    if (lan.getAttribute("data-lang") === langAttribute) {
      lan.classList.add("selected");
    } else {
      lan.classList.remove("selected");
    }
  });

});
