import Image from "next/image";
import { IntroduceCardType } from "@/lib/type";
type IntroduceCardProps = {
  cardData: IntroduceCardType;
};
export default function IntroduceCard({ cardData }: IntroduceCardProps) {
  return (
    <div className="flex flex-wrap xl:flex-nowrap xl:justify-center xl:items-center gap-8">
      <div>
        <Image
          src={cardData.imageUrl}
          width={320}
          height={260}
          alt={cardData.title}
          className="rounded-md shadow-md lg:w-[22rem] h-48 sm:w-full min-w-72"
        />
      </div>
      <div className=" min-w-48">
        <h3 className="text-2xl font-bold tracking-wider mb-4">
          {cardData.title}
        </h3>
        <p className=" font-semibold tracking-wider leading-relaxed text-neutral-500">
          {cardData.brief}
        </p>
      </div>
    </div>
  );
}
