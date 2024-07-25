import { roomData1, roomData2, roomData3 } from "@/lib/dataList";
import ListComponent from "./ListComponent";
import { FaBed, FaPerson, FaTableCellsLarge } from "react-icons/fa6";
import IconCardComponent from "@/app/room/(roomPage)/IconCard";
import { RoomDetailType } from "@/lib/type";

type TextAreaProps = {
  roomData: RoomDetailType;
};

export default function TextAreaComponent({ roomData }: TextAreaProps) {
  const { accommodate, bed, area, title, description } = roomData;
  return (
    <div className="col-span-4 flex flex-col gap-16">
      <div>
        <h2 className="text-3xl font-semibold tracking-wider mb-2">{title}</h2>
        <p className="text-sm font-bold text-neutral-500">{description}</p>
      </div>
      <div>
        <h2 className="border-l-4 border-[#c4a382] mb-4 text-neutral-600 font-semibold pl-3 text-2xl">
          基本房型資訊
        </h2>
        <div className="flex justify-start items-center gap-6 ">
          <div className="bg-white">
            <IconCardComponent text={area}>
              <FaTableCellsLarge
                size={22}
                className="rounded-md text-[#c4a382]"
              />
            </IconCardComponent>
          </div>
          <div className="bg-white">
            <IconCardComponent text={bed}>
              <FaBed size={22} className="rounded-md text-[#c4a382]" />
            </IconCardComponent>
          </div>

          <div className="bg-white">
            <IconCardComponent text={accommodate}>
              <FaPerson size={22} className="rounded-md text-[#c4a382]" />
            </IconCardComponent>
          </div>
        </div>
      </div>
      {<ListComponent headline="房間格局" arrayContent={roomData1} />}
      {<ListComponent headline="房內設備" arrayContent={roomData2} />}
      {<ListComponent headline="備品提供" arrayContent={roomData3} />}

      <div>
        <h2 className="border-l-4 border-[#c4a382] mb-4 text-neutral-600 font-semibold pl-3 text-2xl">
          訂房須知
        </h2>
        <div className="py-6 px-2">
          <ul className="flex flex-col gap-3">
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>1.</p>
              入住時間為下午3點，退房時間為上午12點。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center gap-3">
              <p>2.</p>
              如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>3.</p>
              請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>4.</p> 若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>5.</p> 請愛惜我們的房間與公共空間，並保持整潔。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center gap-3">
              <p>6.</p>
              如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center gap-3">
              <p>7.</p>{" "}
              我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>8.</p>
              請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center  gap-3">
              <p>9.</p>{" "}
              我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。
            </li>
            <li className="font-semibold text-neutral-500 flex items-center gap-3">
              <p>10.</p>
              為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
