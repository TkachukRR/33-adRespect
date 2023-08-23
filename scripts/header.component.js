import makeSearchingMarkup from "./searching.js";
import makeNavMarkup from "./navigation.js";

export function getHeaderMarkup(data) {
  const addNavigation = data.header.navigation;
  const addSearching = data.header.searching;
  const navButtonIds = [];

  if (addNavigation) {
    for (const sectionKey in data) {
      const section = data[sectionKey];
      if (
        section.hasOwnProperty("onNavigation") &&
        section.onNavigation === true
      ) {
        navButtonIds.push(section.id);
      }
    }
  }
  return `
  <div class="container mx-auto flex justify-between px-[9px] py-[24px] content-center">
    <a href="/" class="flex content-center pointer">
      <img 
        src="./images/${data.header.logo}" 
        alt="Giard design logo" />
    </a>
    <div class="flex items-center gap-[54px]">
      ${addNavigation ? makeNavMarkup(data, navButtonIds) : null}
    </div>
  </div>`;
}

// ${!addSearching ?? makeSearchingMarkup()}
