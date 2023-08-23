export default function getOfferCardMarkup(options) {
  return options
    .map((option) => {
      return `
        <li class="px-[40px] py-[48px] rounded-[28px] bg-white">
            <img src="../images/${option.image}" class="w-[40px] h-[40px] inline-block mb-[34px]"/>
            <h3 class="mb-[12px]">${option.title}</h3>
            <p class="mb-[63px]">${option.description}</p>
            <a href="">Dowiedz się więcej
                <img
                    src="./../images/long_arrow.svg"
                    class="inline-block w-[16px] h-[16px] rotate-[270deg]"
                />
            </a>
       </li>`;
    })
    .join("");
}
