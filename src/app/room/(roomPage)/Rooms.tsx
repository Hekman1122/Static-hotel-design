import Link from "next/link";
import { RoomDetailData } from "@/lib/dataList";
import RoomCardComponent from "./RoomCard";

export default function RoomsComponent() {
  return (
    <section className="bg-[#fffbf6]">
      <div className="px-12 xl:px-20 py-16 w-full lg:w-4/5 mx-auto">
        <div>
          <p className="tracking-wider font-semibold py-3">房型選擇</p>
          <h2 className="text-[#c4a382] text-4xl tracking-wider font-semibold">
            各種房型，任您挑選
          </h2>
        </div>

        {/* 展示區 */}
        <div className="mt-12 flex flex-col gap-10 items-start">
          {RoomDetailData.map((room) => {
            return <RoomCardComponent roomDetail={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
