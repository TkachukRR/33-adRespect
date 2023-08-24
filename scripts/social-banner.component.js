import { updateAccentWords } from "./helpers.js";

export function getSocialBannerMarkup(data) {
  const sectionData = data.socialBanner;
  return `
    <div class="px-[110px] py-[120px] bg-green text-grey flex items-center gap-[64px] max-w-[1040px] mx-auto">
        <h4 class="max-w-[600px] text-40px font-motser tracking--2 leading-120%">${updateAccentWords(
          sectionData.tagline,
          sectionData.accent
        )}</h4>
        <div>
            <p class="text-16px font-inter tracking--.16 leading-150% mb-[24px]">${
              sectionData.description
            }</p>
                <a href="" class="btn btn-wight-full inline-block">
                    Instagram
                </a>
        </div>
    </div>
    `;
}
