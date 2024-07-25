import Image from "next/image";
type BannerProps = {
  children: React.ReactNode;
};
export default function BannerComponent({ children }: BannerProps) {
  return (
    <section className="relative bg-black/50 w-full lg:h-screen h-full flex justify-center items-center">
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png?raw=true"
        alt="banner"
        width={600}
        height={400}
        className="w-full h-full lg:h-screen z-[-10] absolute top-0 left-0 "
      />
      <div className="lg:px-20 py-6 lg:pt-20 w-full">
        {/* 左右區塊 */}
        <div className="flex-wrap lg:flex-nowrap flex gap-12 justify-center items-center w-full my-16">
          {/* 左邊 */}
          <div className="lg:w-1/2 w-full text-center lg:text-start pt-4">
            <h1 className="text-4xl lg:text-3xl text-[#c4a382] font-semibold tracking-wider">
              享樂酒店
            </h1>
            <h3 className="text-xl lg:text-lg text-[#c4a382] font-semibold">
              Enjoyment Luxury Hotel
            </h3>
            <div className="hidden lg:block w-2/3 h-[2px] bg-gradient-to-r from-[#c4a382] to-white mt-6"></div>
            <div className="lg:hidden w-[2px] h-20 bg-gradient-to-b from-[#c4a382] to-white mt-6 mx-auto"></div>
          </div>
          {/* 右邊 */}
          <>{children}</>
        </div>
      </div>
    </section>
  );
}
