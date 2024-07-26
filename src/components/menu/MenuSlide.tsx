"use server";

import Image from "next/image";
import MenuCardComponent from "./MenuCard";
import { menuCardData } from "@/lib/dataList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default async function MenuSlideComponent() {
  return (
    <section className="bg-[#fffbf6] h-screen relative py-16 px-12 lg:px-0">
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line.png?raw=true"
        width={200}
        height={400}
        alt="vertical-line"
        className="h-[700px] w-32 flex-1 absolute top-16 left-8 hidden xl:block"
      />

      {/* slide menu */}

      <div className="text-3xl gap-8 text-[#c4a382] flex items-center mb-10 max-w-5xl m-auto ">
        <h2>
          關於 <br />
          我們
        </h2>
        <div className="h-[1.5px] bg-gradient-to-r from-[#c4a382] to-[#fffbf6] w-1/2 lg:w-28"></div>
      </div>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {menuCardData.map((menu) => {
              return (
                <CarouselItem
                  key={menu.title}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <MenuCardComponent menu={menu} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:block" />
          <CarouselNext className="hidden xl:block" />
        </Carousel>
      </div>
    </section>
  );
}
