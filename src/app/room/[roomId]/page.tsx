import { RoomDetailData } from "@/lib/dataList";
import FormAreaComponent from "./components/FormArea";
import Image from "next/image";
import TextArea from "./components/TextArea";
import Carousel from "@/components/Carousel";

type RoomDetailPageType = {
  params: {
    roomId: string;
  };
};

export default function RoomDetailPage({ params }: RoomDetailPageType) {
  const room = RoomDetailData.find((target) => target.id === params.roomId)!;
  const { imageUrl } = room;
  return (
    <section className="w-full md:px-16 py-20 bg-[#fffbf6]">
      {/* 圖片區 */}
      <div className="hidden lg:flex justify-center items-center gap-2 h-[450px] rounded-3xl overflow-hidden pt-16">
        {/* 左圖 */}
        <div className="w-full h-full">
          <Image
            src={imageUrl[0]}
            width={600}
            height={300}
            alt="main-photo"
            className="w-full h-[420px]"
          />
        </div>
        {/* 右圖區 */}
        <div className="grid grid-cols-2 gap-2 w-full h-full">
          {imageUrl.slice(1).map((photo) => {
            return (
              <div key={photo}>
                <Image
                  src={photo}
                  width={200}
                  height={200}
                  alt="side-photo"
                  className="w-full h-48"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 輪播 */}
      <div className="w-full lg:hidden lg:rounded-3xl overflow-hidden rounded-md mt-8 lg:mt-12">
        <Carousel images={imageUrl} />
      </div>

      {/* 文字區 */}
      <div className="max-w-5xl mx-auto grid grid-col-1 lg:grid-cols-7 gap-8 mt-12 px-4 lg:px-0 lg:mt-20 ">
        {/* 敘述區 */}
        <TextArea roomData={room} />
        {/* 表單 */}
        <FormAreaComponent roomData={room} />
      </div>
    </section>
  );
}
