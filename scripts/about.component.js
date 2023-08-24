import { getMainSectionMarkup } from "./section-markup-maker.js";

export function getAboutMarkup(data) {
  const sectionData = data.about;
  return `
  <div class="flex gap-[64px] bg-green">
    <div class="h-[720px] w-1/2 overflow-hidden">
        <img class="object-cover w-full object-center" src="../images/about.jpg" alt="Example"/>
    </div>
    <div class="w-1/2 text-grey py-[135px] pl-[96px]">
    ${getMainSectionMarkup(sectionData)}
    <a href="" class="inline-block btn btn-wight mt-[72px]">
        <span class="mr-[8px]">Poznaj nas bliżej</span>
        <img
        src="./../images/long_arrow.svg"
        class="inline-block w-[16px] h-[16px]"
        />
    </a>
    </div>
  </div>
    `;
}
