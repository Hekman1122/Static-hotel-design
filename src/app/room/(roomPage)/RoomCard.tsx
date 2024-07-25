import { RoomDetailType } from "@/lib/type";
import Image from "next/image";
import {
  FaBed,
  FaPerson,
  FaTableCellsLarge,
  FaArrowRight,
} from "react-icons/fa6";
import IconCardComponent from "./IconCard";
import Link from "next/link";

type RoomCardType = {
  roomDetail: RoomDetailType;
};

function priceWithComma(dollar: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(dollar).split(".")[0];
}

export default function RoomCardComponent(props: RoomCardType) {
  const { accommodate, imageUrl, title, description, area, price, bed, id } =
    props.roomDetail;
  return (
    <article className="w-full h-full grid grid-cols-1 lg:grid-cols-2 rounded-xl gap-4 lg:gap-2 shadow-md bg-white">
      {/* 圖片 */}
      <Image
        src={imageUrl[0]}
        width={500}
        height={350}
        alt="room1"
        className="w-full h-full rounded-md"
      />
      {/* 字卡 */}
      <div className="flex flex-col py-4 px-6 gap-5 ">
        <div>
          <h2 className="text-3xl font-semibold tracking-wider mb-1">
            {title}
          </h2>
          <p className="text-sm font-bold text-neutral-500">{description}</p>
        </div>

        {/* icons */}
        <div className="flex justify-start items-center gap-6">
          <IconCardComponent text={area}>
            <FaTableCellsLarge
              size={22}
              className="rounded-md text-[#c4a382]"
            />
          </IconCardComponent>
          <IconCardComponent text={bed}>
            <FaBed size={22} className="rounded-md text-[#c4a382]" />
          </IconCardComponent>
          <IconCardComponent text={accommodate}>
            <FaPerson size={22} className="rounded-md text-[#c4a382]" />
          </IconCardComponent>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#c4a382] to-white my-4"></div>
        <div className="flex justify-between items-center">
          <h3 className="text-[#c4a382] text-xl font-semibold">{`${priceWithComma(
            price
          )} 元`}</h3>
          <Link href={`/room/${id}`}>
            <FaArrowRight size={22} className="text-[#c4a382]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
