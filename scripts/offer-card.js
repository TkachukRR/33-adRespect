export default function getOfferCardMarkup(options) {
  return options
    .map((option) => {
      return `
        <li id="${option.id}" class="px-[40px] py-[48px] rounded-[28px] bg-white  text-black ">
            <img src="../images/${option.image}" class="w-[40px] h-[40px] inline-block mb-[34px]"/>
            <h3 class="mb-[12px] text-28px font-motser font-medium tracking--1.4 leading-115%">${option.title}</h3>
            <p class="mb-[63px] text-14px tracking--.14 leading-150%">${option.description}</p>
            <a href="" class="flex-inline items-center gap-[10px] text-green border-b border-green leading-150% pb-[4px]">Dowiedz się więcej
                <img
                    src="./../images/long_arrow.svg"
                    class="inline-block w-[16px] h-[16px] rotate-[270deg] fill-green"
                />
            </a>
       </li>`;
    })
    .join("");
}
