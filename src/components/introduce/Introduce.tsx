import { introduceCardData } from "@/lib/dataList";
import { IntroduceCardType } from "@/lib/type";
import IntroduceCard from "./IntroduceCard";
// flex flex-wrap lg:flex-nowrap lg:justify-center
export default function IntroduceComponent() {
  return (
    <section className="bg-[#fffbf6]">
      <div className="px-12 xl:px-20 py-16 w-full lg:w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-5 gap-12">
        {/* 左邊 */}
        <aside>
          <h2 className="text-[#c4a382] text-3xl font-semibold w-36">
            <p className="mb-2">最新</p>
            <p>消息</p>
          </h2>
          <div className="w-2/3 lg:w-4/5 h-[2px] bg-gradient-to-r from-[#c4a382] to-white mt-6"></div>
        </aside>
        {/* 右邊 */}
        <article className="flex flex-col gap-8 xl:col-span-4">
          {introduceCardData.map((card: IntroduceCardType) => {
            return <IntroduceCard key={card.title} cardData={card} />;
          })}
        </article>
      </div>
    </section>
  );
}
