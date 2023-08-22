import makeSearchingMarkup from "./searching.js";
import makeNavMarkup from "./navigation.js";

export function getHeaderMarkup(data) {
  return `
  <div class="container mx-auto flex justify-between px-[9px] py-[24px] content-center">
    <a href="/" class="flex content-center pointer">
      <img 
        src="./images/logo.svg" 
        alt="Giard design logo" />
    </a>
    <div class="flex items-center gap-[54px]">
      ${makeNavMarkup(data)}
      ${makeSearchingMarkup()}
    </div>
  </div>`;
}
