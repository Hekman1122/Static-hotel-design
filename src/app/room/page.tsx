import BlurAreaComponent from "@/components/banner/Banner";
import RoomsComponent from "@/app/room/(roomPage)/Rooms";
import { Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default async function RoomComponent() {
  return (
    <main>
      <Suspense
        fallback={
          <AiOutlineLoading3Quarters
            size={28}
            className="animate-spin mx-auto"
          />
        }
      ></Suspense>
      <BlurAreaComponent>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white">
          客房旅宿
        </h2>
      </BlurAreaComponent>
      <RoomsComponent />
    </main>
  );
}
