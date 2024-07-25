import { RoomDetailType } from "@/lib/type";
type FormAreaProps = {
  roomData: RoomDetailType;
};
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BookRoomForm from "./BookRoomForm";
import { Button } from "@/components/ui/button";
function priceWithComma(dollar: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(dollar).split(".")[0];
}
export default function FormAreaComponent({ roomData }: FormAreaProps) {
  const { title, description, price } = roomData;
  return (
    <aside className="col-span-3 bg-gray-50 rounded-xl px-6 py-8 h-full lg:h-2/5 flex flex-col gap-8">
      <h2 className="text-xl font-semibold tracking-wider">預定房型</h2>
      <div>
        <h2 className="text-3xl font-semibold tracking-wider mb-2">{title}</h2>
        <p className="text-sm font-bold text-neutral-500 leading-6">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <BookRoomForm text={"入住日期"} />
        <BookRoomForm text={"退房日期"} />
      </div>
      {/* 人數 */}
      <div className="grid w-full items-center gap-2">
        <Label
          htmlFor="people"
          className="text-neutral-700 font-semibold text-lg"
        >
          人數
        </Label>
        <Input
          type="text"
          id="people"
          placeholder="入住人數"
          className="text-neutral-700 font-semibold"
        />
      </div>
      <h3 className="text-[#c4a382] tracking-widest text-xl font-semibold ">{`${priceWithComma(
        price
      )} 元`}</h3>
      <Button className="bg-[#c4a382] w-full text-white font-semibold">
        立即訂房
      </Button>
    </aside>
  );
}
