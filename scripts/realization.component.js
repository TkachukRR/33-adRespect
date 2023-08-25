import { getMainSectionMarkup } from "./section-markup-maker.js";

export function getRealizationMarkup(data) {
  const sectionData = data.realization;
  return `
    <div class="max-w-[1120px] mx-auto pt-[120px] pb-[96px]">
      ${getMainSectionMarkup(sectionData, "text-green")}
    </div>
    `;
}
