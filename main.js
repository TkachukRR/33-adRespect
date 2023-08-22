import { getHeaderMarkup } from "./scripts/header.component.js";

const pageRefs = {
  header: document.querySelector("header"),
  hero: document.querySelector("section.hero"),
};

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    pageRefs.header.insertAdjacentHTML("beforeend", getHeaderMarkup(data));
  } catch (error) {
    console.error("Data loading error:", error);
  }
}

fetchData();
