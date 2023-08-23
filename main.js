import { getHeaderMarkup } from "./scripts/header.component.js";
import { getHeroMarkup } from "./scripts/hero.component.js";
import { getOfferMarkup } from "./scripts/offer.component.js";

const pageRefs = {
  header: document.querySelector("header"),
  hero: document.querySelector("section.hero"),
  offer: document.querySelector("section.offer"),
};

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    pageRefs.header.insertAdjacentHTML("beforeend", getHeaderMarkup(data));
    pageRefs.hero.insertAdjacentHTML("beforeend", getHeroMarkup(data));
    pageRefs.offer.insertAdjacentHTML("beforeend", getOfferMarkup(data));
  } catch (error) {
    console.error("Data loading error:", error);
  }
}

fetchData();
