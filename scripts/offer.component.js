import getOfferCardMarkup from "./offer-card.js";
import { getMainSectionMarkup } from "./section-markup-maker.js";

export function getOfferMarkup(data) {
  const sectionData = data.offer;
  return `
    <div class="max-w-[1040px] mx-auto">
      ${getMainSectionMarkup(sectionData)}
    </div>
    <ul class="flex gap-[64px] mt-[96px]">
        ${getOfferCardMarkup(sectionData.options)}
    </ul>
    `;
}
