import getOfferCardMarkup from "./offer-card.js";

export function getOfferMarkup(data) {
  const sectionData = data.filter(
    (section) => section.sectionTitle === "Oferta"
  )[0];
  return `
    <div class="max-w-[1040px] mx-auto">
        <h2 class="font-motser tracking--1.44 mb-[32px] text-black leading-115%">
            <div class="text-12px mb-[16px] tracking--.12 leading-150% text-green">
                ${sectionData.sectionTitle}
            </div>
            ${sectionData.tagline}
        </h2>
        <p class="max-w-[700px] tracking--.16 leading-150%">${
          sectionData.intro
        }</p>
    </div>
    <ul class="flex gap-[64px] mt-[96px]">
        ${getOfferCardMarkup(sectionData.options)}
    </ul>
    `;
}
