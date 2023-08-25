import { getHeaderMarkup } from "./scripts/header.component.js";
import { getHeroMarkup } from "./scripts/hero.component.js";
import { getOfferMarkup } from "./scripts/offer.component.js";
import { getAboutMarkup } from "./scripts/about.component.js";
import { getRealizationMarkup } from "./scripts/realization.component.js";
import { getSocialBannerMarkup } from "./scripts/social-banner.component.js";
import { getFooterMarkup } from "./scripts/footer.component.js";
import { getGalleryItemsMarkup, makeMarcy } from "./scripts/gallery.js";

const GALLERY_ITEMS = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
];

const pageRefs = {
  header: document.querySelector("header"),
  hero: document.querySelector("section.hero"),
  offer: document.querySelector("section.offer"),
  about: document.querySelector("section.about"),
  realization: document.querySelector("#realization"),
  gallery: document.querySelector("#gallery"),
  banner: document.querySelector(".banner"),
  footer: document.querySelector(".footer"),
  btnMore: document.querySelector("button#show-more"),
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
    pageRefs.gallery.insertAdjacentHTML(
      "beforeend",
      getGalleryItemsMarkup(GALLERY_ITEMS)
    );
    makeMarcy();
    pageRefs.banner.insertAdjacentHTML(
      "beforeend",
      getSocialBannerMarkup(data)
    );
    pageRefs.footer.insertAdjacentHTML("beforeend", getFooterMarkup(data));
    console.log(pageRefs.btnMore);

    pageRefs.btnMore.addEventListener("click", () => {
      pageRefs.gallery.classList.remove("max-h-[1475px]");
      document.querySelector(".gradient").classList.remove("gradient");
      pageRefs.btnMore.style.display = "none";
    });
  } catch (error) {
    console.error("Data loading error:", error);
  }
}

fetchData();
