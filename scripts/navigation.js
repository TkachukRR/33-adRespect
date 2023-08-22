export default function makeNavMarkup(data) {
  return `
    <nav class="">
      <ul class="flex items-center gap-[54px] ">
        ${makeNavItemsMarkup(data)}
      </ul>
    </nav>`;
}

function makeNavItemsMarkup(data) {
  return data
    .map((data) => {
      let content = data.sectionTitle;

      if (!data.options) {
        return `
        <li>
          <a href="" class="">
            ${content}
          </a>
        </li>`;
      }
      return `<li class="relative group">
      <a href="" class="flex gap-[8px] items-center">
        ${content}
        <img src="./images/arrow_down.svg" alt="submenu arrow" class="group-hover:rotate-180"/>
      </a>
      <div class="h-0 absolute bottom-0 translate-y-full overflow-hidden transition-all duration-100 group-hover:h-auto ">
        ${makeHiddenSubMenuMarkup(data.options)}
      </div>
      </li>`;
    })
    .join("");
}

function makeHiddenSubMenuMarkup(subMenuArray) {
  const subMenuItems = subMenuArray
    .map((subMenuElement) => {
      return `<li>${subMenuElement.title}</li>`;
    })
    .join("");

  return `<ul>${subMenuItems}</ul>`;
}
