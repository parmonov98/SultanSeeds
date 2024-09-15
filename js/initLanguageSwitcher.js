export function initLanguageSwitcher({
  switcherSelector: e,
  buttonSelector: t,
  optionsSelector: n,
  optionSelector: l,
  flagSelector: a,
  textSelector: c,
  flagImages: s = {
    en: "https://ik.imagekit.io/testcloud/SultanSeeds/photo/icon/GB.png?updatedAt=1725041170928",
    ru: "https://ik.imagekit.io/testcloud/SultanSeeds/photo/icon/RU.png?updatedAt=1725041169328",
  },
  texts: o = { en: "English", ru: "Russian" },
}) {
  let i = document.querySelector(e),
    r = document.querySelector(t),
    u = document.querySelector(n),
    g = document.querySelectorAll(l),
    y = document.querySelector(a),
    d = document.querySelector(c),
    p = window.location.pathname,
    h = p.split("/"),
    L = h[1],
    S = L;
  function q() {
    g.forEach((e) => {
      e.classList.toggle("selected", e.dataset.lang === S),
        (e.style.display = e.dataset.lang === S ? "none" : "block");
    }),
      (y.src = s[S]),
      (d.textContent = o[S]);
  }
  "ru" === L
    ? ((o.ru = "Русский"), (o.en = "Английский"), (S = "ru"))
    : (S = "en"),
    r.addEventListener("click", () => {
      i.classList.toggle("active"),
        (u.style.display = i.classList.contains("active") ? "block" : "none");
    }),
    g.forEach((e) => {
      e.addEventListener("click", () => {
        (S = e.dataset.lang),
          q(),
          i.classList.remove("active"),
          (u.style.display = "none");
      });
    }),
    q();
}
