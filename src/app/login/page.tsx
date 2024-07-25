import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="bg-black py-4 h-screen relative">
      <div className="px-10">
        <Link href="/">
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="logo"
            width={200}
            height={60}
          />
        </Link>
      </div>
      {/* 波浪圖-絕對座標 */}
      <Image
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
        width={800}
        height={200}
        alt="line2"
        className="w-3/4 absolute right-0 top-8"
      />
      {/* 表單 */}
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 mx-auto pt-12 px-8 lg:px-0">
        <div className="flex flex-col gap-6">
          <p className="text-[#c4a382] font-semibold">享樂酒店，誠摯歡迎</p>
          <h2 className="text-white text-3xl font-semibold tracking-wider">
            立即開始旅程
          </h2>
          {/* 信箱 */}
          <div>
            <Label htmlFor="email" className="text-white font-semibold">
              電子信箱
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="電子信箱"
              className="mt-2"
            />
          </div>
          {/* 密碼 */}
          <div>
            <Label htmlFor="password" className="text-white font-semibold">
              密碼
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="密碼"
              className="mt-2"
            />
          </div>
          {/* checkbox */}
          <div className="flex justify-between items-center">
            <div className="flex justify-items-center items-center">
              <Checkbox id="forget" className="bg-white mr-4" />
              <Label htmlFor="forget" className="text-white font-semibold">
                記住密碼
              </Label>
            </div>
            <Link href="forger-password">
              <p className="underline text-[#c4a382]">忘記密碼 ?</p>
            </Link>
          </div>
          {/* 登入按鈕 */}
          <div className="my-3">
            <Button className="bg-[#c4a382] text-lg text-black font-semibold duration-300 w-full py-5 hover:text-white">
              會員登入
            </Button>
          </div>
          {/* 忘記密碼 */}
          <h2 className="flex justify-start gap-4 items-center">
            <p className="text-neutral-500 font-semibold">沒有會員嗎 ?</p>
            <p className="underline text-[#c4a382]">
              <Link href="/register/?step=first">前往註冊</Link>
            </p>
          </h2>
        </div>
      </div>
    </section>
  );
}
