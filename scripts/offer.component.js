import getOfferCardMarkup from "./offer-card.js";
import { updateAccentWords } from "./helpers.js";

export function getOfferMarkup(data) {
  const sectionData = data.offer;
  return `
    <div class="max-w-[1040px] mx-auto">
        <h2 class="text-48px font-motser tracking--1.44 mb-[32px] text-black leading-115%">
            <div class="text-12px mb-[16px] tracking--.12 leading-150% text-green">
                ${sectionData.title}
            </div>
            ${updateAccentWords(sectionData.tagline, sectionData.accent)}
        </h2>
        <p class="max-w-[700px] tracking--.16 leading-150%">${
          sectionData.description
        }</p>
    </div>
    <ul class="flex gap-[64px] mt-[96px]">
        ${getOfferCardMarkup(sectionData.options)}
    </ul>
    `;
}
