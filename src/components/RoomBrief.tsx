import Image from "next/image";

Image;

export default function RoomComponent() {
  return (
    <section className="bg-neutral-900 h-full lg:h-screen relative px-8 lg:px-0 py-10 lg:py-12">
      {/* 五線譜 */}
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line3.png?raw=true"
        width={900}
        height={200}
        alt="wave-line"
        className="right-0 absolute top-[-2rem]"
      />
      {/* 波浪線 */}
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/bg.png?raw=true"
        width={400}
        height={200}
        alt="wave-photo"
        className="right-0 absolute  bottom-16 w-full h-96"
      />
      {/* 圖卡區 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 lg:w-11/12 mx-auto">
        <aside>
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room1.png?raw=true"
            width={540}
            height={320}
            alt="room-image"
            className="rounded-lg lg:w-4/5 w-10/12 sm:w-3/4  mx-auto"
          />
        </aside>
        <div className="self-end p-8 flex gap-8 flex-col">
          <h2 className="font-bold text-white text-2xl">尊爵雙人房</h2>
          <p className="font-semibold text-neutral-400 text-sm ">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <h3 className="font-bold text-white text-xl">NT$ 10,000</h3>
          <div className="w-full h-20 bg-white rounded-md flex justify-end items-center gap-4 px-4">
            <p className="font-semibold">查看更多</p>
            <div className="w-20 h-[2px]  bg-black"></div>
          </div>
          {/* arrow svg */}
          <div className="flex gap-6 items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#c4a382]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#c4a382]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
