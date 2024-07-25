import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAlignJustify } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
export default function NavbarComponent() {
  return (
    <header className="bg-black z-20 absolute top-0 left-0 w-full px-6 lg:px-20 pt-4">
      <div className="flex justify-between items-center ">
        <Link href="/">
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="logo"
            width={200}
            height={60}
          />
        </Link>
        {/* 大螢幕 */}
        <ul className="hidden justify-center items-center gap-10 lg:flex">
          <Link href="/room">
            <li className="text-white font-semibold tracking-wider w-full text-center">
              客房旅宿
            </li>
          </Link>
          <li className="text-white font-semibold tracking-wider">
            <Link href="/login"> 會員登入</Link>
          </li>
          <li>
            <Button className="bg-[#c4a382] text-white font-semibold">
              立即訂房
            </Button>
          </li>
        </ul>
        {/* 手機 */}
        {/* 摺疊夾 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-white lg:hidden" variant={"ghost"}>
              <FaAlignJustify size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black/10 py-12">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
                  alt="logo"
                  width={200}
                  height={80}
                  className="mx-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="h-screen">
              <ul className="flex flex-col justify-evenly items-center gap-8 px-16 h-4/5">
                <Link href="/room">
                  <li className="text-white text-lg font-semibold tracking-wider w-full text-center">
                    客房旅宿
                  </li>
                </Link>

                <li className="text-white text-lg font-semibold tracking-wider w-full text-center">
                  <Link href="login"> 會員登入</Link>
                </li>
                <li className="w-full">
                  <Button className="bg-[#c4a382] text-lg text-white font-semibold hover:bg-white hover:text-black duration-300 w-full py-3">
                    立即訂房
                  </Button>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
