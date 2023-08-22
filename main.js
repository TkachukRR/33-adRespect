import { getHeaderMarkup } from "./scripts/header.js";

const pageRefs = {
  header: document.querySelector("header"),
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
