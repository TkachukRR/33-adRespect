export function getGalleryItemsMarkup(imageNumbers) {
  return imageNumbers
    .map(
      (num) =>
        `<li class="marcy-card">
            <a href="./../images/realization/${num}-full.webp" class="fancybox">
                <img src="./../images/realization/${num}.webp" alt="project"/>
            </a>
        </li>`
    )
    .join("");
}

export function makeMarcy() {
  const masonry = new Macy({
    container: ".macy",
    mobileFirst: true,
    trueOrder: false,
    waitForImages: true,
    columns: 1,
    margin: {
      x: 43,
      y: 42,
    },
    breakAt: {
      1024: 3,
      480: 2,
    },
  });
}
