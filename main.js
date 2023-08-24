import { getHeaderMarkup } from "./scripts/header.component.js";
import { getHeroMarkup } from "./scripts/hero.component.js";
import { getOfferMarkup } from "./scripts/offer.component.js";
import { getAboutMarkup } from "./scripts/about.component.js";
import { getRealizationMarkup } from "./scripts/realization.component.js";
import { getSocialBannerMarkup } from "./scripts/social-banner.component.js";

const pageRefs = {
  header: document.querySelector("header"),
  hero: document.querySelector("section.hero"),
  offer: document.querySelector("section.offer"),
  about: document.querySelector("section.about"),
  realization: document.querySelector(".realization__content"),
  banner: document.querySelector(".banner"),
};

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    pageRefs.header.insertAdjacentHTML("beforeend", getHeaderMarkup(data));
    pageRefs.hero.insertAdjacentHTML("beforeend", getHeroMarkup(data));
    pageRefs.offer.insertAdjacentHTML("beforeend", getOfferMarkup(data));
    pageRefs.about.insertAdjacentHTML("beforeend", getAboutMarkup(data));
    pageRefs.realization.insertAdjacentHTML(
      "beforeend",
      getRealizationMarkup(data)
    );
    pageRefs.banner.insertAdjacentHTML(
      "beforeend",
      getSocialBannerMarkup(data)
    );
  } catch (error) {
    console.error("Data loading error:", error);
  }
}

fetchData();
