export function getHeroMarkup(data) {
  return `
    <div class="bg-beige flex gap-[64px] relative">
          <div class="intro w-1/2">
          <div class="w-screen absolute top-0 left-0   h-full">
            <div class="container mx-auto h-full">
              <div class="max-w-[490px] flex flex-col justify-center items-start h-full">
                <h1 class="text-[60px] font-motser font-medium leading-[70px] mb-[44px]">
                  Nowoczesna aranżacja Twojego ogrodu
                </h1>
                <p class="mb-[72px]">
                  Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
                </p>
                <ul class="flex gap-[36px] items-center">
                  <li>
                    <a href="" class="btn btn-green-dark">
                      Skontaktuj się z nami
                    </a>
                  </li>
                  <li>
                    <a href="" class="btn btn-green-light">
                      <span class="mr-[8px]">Zobacz nasze realizacje</span>
                      <img
                        src="./../images/long_arrow.svg"
                        class="inline-block w-[16px] h-[16px]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          
          <div class="slider bg-black h-[737px] w-1/2 overflow-y-hidden">
            <img src="./../images/slide_1.jpg" class="object-cover rotate-180"/>
            <div class="buttons px-[32px] py-[24px] absolute bottom-0 right-0 bg-grey">
              <button class="w-[48px] h-[48px] ">
                <img src="./../images/slider_arrow.svg" class=""/>
              </button>
              <button class="w-[48px] h-[48px]">
                <img src="./../images/slider_arrow.svg" class="rotate-180"/>
              </button>
            </div>
          </div>

    </div>`;
}
