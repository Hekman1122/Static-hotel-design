import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Fa1, Fa2 } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
interface MyInterface {
  searchParams: { step: string | undefined };
}
export default function RegisterPage({ searchParams }: MyInterface) {
  const { step } = searchParams;
  return (
    <section className="bg-black min-h-screen relative pb-8">
      <div className="px-10 pt-4">
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
      <div className="w-full sm:w-1/2 lg:w-1/4 mx-auto px-8 lg:px-0">
        <div className="flex flex-col gap-6">
          <p className="text-[#c4a382] font-semibold">享樂酒店，誠摯歡迎</p>
          <h2 className="text-white text-3xl font-semibold tracking-wider">
            立即開始旅程
          </h2>
          {/* 步驟圖示 */}
          <div className="flex justify-between items-center gap-4">
            {/* 步驟一 */}
            <div className="flex flex-col items-center gap-2">
              <Fa1
                size={20}
                className={`p-2 w-8 h-8 text-white rounded-full bg-[#c4a382]`}
              />
              <p className="text-neutral-300 text-sm font-semibold">
                輸入信箱及密碼
              </p>
            </div>
            {/* 線 */}
            <div
              className={`w-36 h-[2px] ${
                step === "second" ? "bg-[#c4a382]" : "bg-neutral-400"
              }`}
            ></div>
            {/* 步驟二 */}
            <div className="flex flex-col items-center gap-2">
              <Fa2
                size={20}
                className={`p-2 w-8 h-8 text-white rounded-full ${
                  step === "second" ? "bg-[#c4a382]" : "border-2 border-white"
                }`}
              />
              <p className="text-neutral-300 text-sm font-semibold">
                填寫基本資料
              </p>
            </div>
          </div>
          {/* 第一步驟表單 */}
          {step === "first" && (
            <form className="flex flex-col gap-4">
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
              {/* 確認密碼 */}
              <div>
                <Label htmlFor="password" className="text-white font-semibold">
                  確認密碼
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="再輸入一次密碼"
                  className="mt-2"
                />
              </div>
              {/* 登入按鈕 */}
              <div className="my-4">
                <Button className="bg-[#c4a382] text-lg text-black font-semibold duration-300 w-full py-5 hover:text-white">
                  <Link href="/register?step=second"> 下一步</Link>
                </Button>
              </div>
            </form>
          )}
          {step === "second" && (
            <form className="flex flex-col gap-4">
              {/* 信箱 */}
              <div>
                <Label htmlFor="username" className="text-white font-semibold">
                  姓名
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="用戶姓名"
                  className="mt-2"
                />
              </div>
              {/* 密碼 */}
              <div>
                <Label htmlFor="cellphone" className="text-white font-semibold">
                  聯絡號碼
                </Label>
                <Input
                  type="cellphone"
                  id="cellphone"
                  placeholder="聯絡號碼"
                  className="mt-2"
                />
              </div>
              {/* 生日 */}
              <div>
                <Label htmlFor="birthday" className="text-white font-semibold">
                  生日
                </Label>
                <Input
                  type="date"
                  id="birthday"
                  placeholder="生日"
                  className="mt-2"
                />
              </div>
              {/* 地址 */}
              <div>
                <Label htmlFor="address" className="text-white font-semibold">
                  聯絡地址
                </Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="地址"
                  className="mt-2"
                />
              </div>
              {/* 同意確認 */}
              <div className="flex justify-items-center items-center">
                <Checkbox id="confirm" className="bg-white mr-4" />
                <Label htmlFor="confirm" className="text-white font-semibold">
                  我已閱讀並同意本網站個資使用規範
                </Label>
              </div>
              {/* 登入按鈕 */}
              <div className="my-3">
                <Button className="bg-[#c4a382] text-lg text-black font-semibold duration-300 w-full py-5 hover:text-white">
                  <Link href="/register?step=second">完成註冊</Link>
                </Button>
              </div>
            </form>
          )}
          {/* 忘記密碼 */}
          <h2 className="flex justify-start gap-4 items-center">
            <p className="text-neutral-500 font-semibold">已有會員嗎 ?</p>
            <p className="underline text-[#c4a382]">
              <Link href="/login">立即登入</Link>
            </p>
          </h2>
        </div>
      </div>
    </section>
  );
}
