export default function makeSearchingMarkup() {
  return `
  <label for="search" class="group flex content-center">
    <input class="inline-block w-0 group-hover:w-[200px] transition-all duration-200 " type="text" name="search" id="" />
    <button type="submit">
      <span class="sr-only">Search</span>
      <img src="./images/search.svg" alt="search button icon" />
    </button>
  </label>
  `;
}
