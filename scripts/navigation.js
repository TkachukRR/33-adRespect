export default function makeNavMarkup(data, ids) {
  return `
    <nav class="">
      <ul class="flex items-center gap-[54px] ">
        ${makeNavItemsMarkup(data, ids)}
      </ul>
    </nav>`;
}

function makeNavItemsMarkup(data, ids) {
  return ids
    .map((section) => {
      const title = data[section].title;
      const href = data[section].id;

      if (!data[section].options) {
        return `
        <li class="hover:bg-beige">
          <a href="#${href}" class="">
            ${title}
          </a>
        </li>`;
      }
      return `
      <li class="relative group hover:bg-beige">
        <a href="#${href}" class="flex gap-[8px] items-center">
          ${title}
          <img src="./images/arrow_down.svg" alt="submenu arrow" class="group-hover:rotate-180"/>
        </a>
        <div class="h-0 absolute bottom-0 translate-y-full overflow-hidden transition-all duration-100 group-hover:h-auto ">
          ${makeHiddenSubMenuMarkup(data[section].options)}
        </div>
      </li>`;
    })
    .join("");
}

function makeHiddenSubMenuMarkup(subMenuArray) {
  const subMenuItems = subMenuArray
    .map((subMenuElement) => {
      return `
      <li class="py-[2px] my-[2px] ">
        <a href="#${subMenuElement.id}" class="">
          ${subMenuElement.title}
        </a>
      </li>`;
    })
    .join("");

  return `<ul class="flex gap-[10px] bg-grey">${subMenuItems}</ul>`;
}
