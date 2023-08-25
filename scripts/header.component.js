import makeSearchingMarkup from "./searching.js";
import makeNavMarkup from "./navigation.js";

export function getHeaderMarkup(data) {
  const addNavigation = data.header.navigation;
  const addSearching = data.header.searching;
  const navButtonIds = addNavigation ? getButtonIdsArray(data) : [];

  return `
    <a href="/" class="flex items-center pointer">
      <img src="./images/${data.header.logo}" alt="Giard design logo" class=""/>
    </a>
    <div class="flex items-center gap-[54px]">
      ${addNavigation ? makeNavMarkup(data, navButtonIds) : null}
      ${addSearching ? makeSearchingMarkup() : null}
    </div>
  `;
}

function getButtonIdsArray(data) {
  const ids = [];

  for (const sectionKey in data) {
    const section = data[sectionKey];
    if (
      section.hasOwnProperty("onNavigation") &&
      section.onNavigation === true
    ) {
      ids.push(section.id);
    }
  }

  return ids;
}
