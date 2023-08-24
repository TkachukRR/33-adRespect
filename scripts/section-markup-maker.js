import { updateAccentWords } from "./helpers.js";

export function getMainSectionMarkup(sectionData) {
  return `
        <h2 class="text-48px font-motser tracking--1.44 mb-[32px]  leading-115%">
          <div id="#${
            sectionData.id
          }" class="text-12px mb-[16px] tracking--.12 leading-150% text-green">
              ${sectionData.title}
          </div>
          ${updateAccentWords(sectionData.tagline, sectionData.accent)}
        </h2>
        <p class="max-w-[700px] tracking--.16 leading-150%">${
          sectionData.description
        }</p>
  `;
}
