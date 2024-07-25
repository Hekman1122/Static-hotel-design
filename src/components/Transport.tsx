import Image from "next/image";
import { FaCar, FaCarSide, FaTrainSubway } from "react-icons/fa6";

export default function TransportComponent() {
  return (
    <section className="bg-black pt-20 px-6 lg:ox-0">
      <div className="w-full lg:max-w-5xl m-auto ">
        <div className="text-3xl gap-8 text-[#c4a382] flex items-center mb-10">
          <h2>
            交通 <br />
            方式
          </h2>
          <div className="h-[1.5px] bg-gradient-to-r from-[#c4a382] to-[#fffbf6] w-1/2 lg:w-28"></div>
        </div>
        {/* 地圖 */}
        <div>
          <h2 className="text-neutral-300 my-2 font-semibold">
            台灣高雄市新興區六角路123號
          </h2>
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/map.png?raw=true"
            width={800}
            height={600}
            alt="map"
            className="w-full h-72"
          />
          {/* icon card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 ">
            <div className="p-2 flex flex-col gap-4">
              <FaCar size={36} color="#c4a382" />
              <h2 className="text-neutral-200 text-lg font-semibold">
                自行開車
              </h2>
              <p className="text-neutral-400 font-semibold ">
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </p>
            </div>
            <div className="p-2 flex flex-col gap-4">
              <FaTrainSubway size={36} color="#c4a382" />
              <h2 className="text-neutral-200 text-lg font-semibold">
                高鐵/火車
              </h2>
              <p className="text-neutral-400 font-semibold ">
                如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
              </p>
            </div>
            <div className="p-2 flex flex-col gap-4">
              <FaCarSide size={36} color="#c4a382" />
              <h2 className="text-neutral-200 text-lg font-semibold">
                禮賓車服務
              </h2>
              <p className="text-neutral-400 font-semibold ">
                承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
        width={800}
        height={200}
        alt="line2"
        className="w-full mt-8"
      />
    </section>
  );
}
