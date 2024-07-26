"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type ImageProp = {
  images: string[];
};
export default function CarouselComponent({ images }: ImageProp) {
  const [number, setNumber] = useState<number>(0);
  return (
    <div className="overflow-hidden relative w-full h-full ">
      <Button
        onClick={() =>
          setNumber((pre) => {
            return pre > 0 ? pre - 1 : images.length;
          })
        }
        className="absolute top-1/2 left-0"
        variant={"ghost"}
      >
        <FaAngleLeft size={24} />
      </Button>
      <Image
        src={images[number]}
        width={500}
        height={300}
        alt="image"
        className="w-full h-full"
      />
      <Button
        onClick={() =>
          setNumber((pre) => {
            return pre < images.length - 1 ? pre + 1 : 0;
          })
        }
        className="absolute top-1/2 right-0"
        variant={"ghost"}
      >
        <FaAngleRight size={24} />
      </Button>
    </div>
  );
}
