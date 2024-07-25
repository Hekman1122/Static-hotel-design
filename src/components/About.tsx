import Image from "next/image";

export default function AboutComponent() {
  return (
    <section className="bg-neutral-900 h-screen flex justify-center items-center relative ">
      <div className="w-full ">
        <Image
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/about.png?raw=true"
          alt="about-photo"
          width={1000}
          height={600}
          className="w-full lg:h-[25rem] h-[28rem]"
        />
        <div className="w-3/4 lg:w-1/2 mx-auto rounded-[3rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 border-l-0 absolute top-12 left-16 lg:top-16 lg:right-48 bg-gradient-to-b from-black/60 to-[#c4a382]/80 py-4 lg:py-14 px-4 lg:px-12 text-white">
          <h2 className="mb-4 text-3xl flex items-center gap-8">
            <p>
              關於 <br />
              我們
            </p>
            <div className="h-[1.5px] bg-white w-36 lg:w-28"></div>
          </h2>
          <div className="flex flex-col gap-5 text-sm font-bold text-neutral-300">
            <p className="leading-6">
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。{" "}
              <br />
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p className="leading-6">
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿者藝術與設計的精緻。
              <br />
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p className="leading-6">
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適的做到我們的餐廳，品嘗精緻的佳餚，體驗無與倫比的味覺饗宴。
            </p>
            <p className="leading-6">
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高學魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
