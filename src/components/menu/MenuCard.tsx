import Image from "next/image";
import { MenuCardType } from "@/lib/type";

export default function MenuCardComponent({ menu }: { menu: MenuCardType }) {
  return (
    <div className="rounded-lg w-72 h-[27rem] relative bg-black flex justify-end flex-col">
      <Image
        src={menu.imageUrl}
        width={200}
        height={300}
        alt="food-menu"
        className="absolute top-0 left-0 h-4/5 w-full"
      />
      {/* 毛玻璃 */}
      <div className="w-full h-1/2 bg-gradient-to-b from-transparent to-black bg-clip-padding backdrop-filter backdrop-blur-sm rounded-lg flex flex-col p-3 gap-3 flex-wrap">
        <h2 className="text-neutral-200 font-bold text-xl tracking-wider">
          {menu.title}
        </h2>
        <p className="flex justify-end items-center gap-3 text-neutral-300 text-sm font-semibold">
          <span>{menu.openHours[0]}</span>
          <span>{menu.openHours[1]}</span>
        </p>
        <p className="text-neutral-300 text-sm font-semibold leading-6">
          {menu.brief}
        </p>
      </div>
    </div>
  );
}
