import { getMainSectionMarkup } from "./section-markup-maker.js";

export function getRealizationMarkup(data) {
  const sectionData = data.realization;
  return `
    <div class="max-w-[1120px] mx-auto pt-[120px] pb-[96px]">
      ${getMainSectionMarkup(sectionData, "text-green")}
    </div>
    `;
}

const masonry = new Macy({
  container: ".macy",
  mobileFirst: true,
  trueOrder: false,
  waitForImages: true,
  columns: 1,
  margin: {
    x: 43,
    y: 42,
  },
  breakAt: {
    1024: 3,
    480: 2,
  },
});
