import Image from "next/image";
import { FaLine, FaSquareInstagram } from "react-icons/fa6";
export default function FooterComponent() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="w-full lg:max-w-5xl m-auto ">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-2 justify-between">
          {/* 左邊 */}
          <div className="flex flex-col gap-10">
            <Image
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
              width={200}
              height={100}
              alt="logo"
            />
            {/* icons */}
            <div className="flex items-center gap-8">
              <FaLine size={24} className="text-neutral-300" />
              <FaSquareInstagram size={24} className="text-neutral-300" />
            </div>
          </div>
          {/* 右邊 */}
          <div className="grid grid-cols-2 gap-8 text-neutral-400">
            <div>
              <h3 className="text-lg font-semibold">TEL</h3>
              <p>+886-7-1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mail</h3>
              <p>elh@hexschool.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">FAX</h3>
              <p>+886-7-1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">WEB</h3>
              <p>www.elhhexschool.com.tw</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-0 mt-12">
          <p className="text-sm font-semibold text-neutral-200">
            806023 台灣高雄市新興區六角路123號
          </p>
          <p className="text-sm font-semibold text-neutral-200">
            © 享樂酒店 2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
