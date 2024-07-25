
export default function BlurAreaComponent() {
  return (
    <div className="w-4/5 lg:w-3/4 mx-auto py-8 lg:py-0">
      {/* 毛玻璃特效 */}
      <div className="w-full mx-auto h-[16rem] lg:h-[26rem] bg-gray-50 rounded-3xl lg:rounded-[65px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 border-l-0 relative">
        <div className="absolute top-8 lg:top-16 left-[-20px] lg:left-[-2rem]">
          <h1 className="text-white text-3xl lg:text-6xl font-semibold tracking-widest">
            高雄
            <p className="py-2 lg:my-5">豪華住宿之選</p>
          </h1>
          <div>
            <p className="text-white text-base lg:text-lg font-semibold tracking-wider mb-4 lg:mb-8">
              我們致力為您提供無與倫比的奢華體驗和優質服務
            </p>
            <div className="w-full h-16 bg-white rounded-md flex justify-end items-center gap-4 px-4">
              <p className="font-semibold">立即訂房</p>
              <div className="w-20 h-[2px]  bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
