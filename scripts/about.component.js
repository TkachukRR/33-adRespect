import { getMainSectionMarkup } from "./section-markup-maker.js";

export function getAboutMarkup(data) {
  const sectionData = data.about;
  return `
  <div class="flex gap-[64px] bg-green">
    <div class="h-[720px] w-1/2 overflow-hidden bg-about bg-cover bg-center">
    </div>
    <div class="w-1/2 h-[720px] text-grey pl-[96px] flex flex-col justify-center items-start">
        <div class="max-w-[500px] ">
            ${getMainSectionMarkup(sectionData, "text-grey")}
            <a href="" class="inline-block btn btn-wight mt-[72px]">
                <span class="mr-[8px]">Poznaj nas bliżej</span>
                <svg class="inline-block w-[16px] h-[16px] fill-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <use xlink:href="./images/long_arrow.svg#Vector"></use>
                </svg>
            </a>
        </div>
    </div>
  </div>
    `;
}
