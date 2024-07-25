import BannerComponent from "@/components/banner/Banner";
import IntroduceComponent from "@/components/introduce/Introduce";
import AboutComponent from "@/components/About";
import RoomComponent from "@/components/RoomBrief";
import MenuSlideComponent from "@/components/menu/MenuSlide";
import TransportComponent from "@/components/Transport";
import BlurAreaComponent from "@/components/banner/BlurArea";

export default function Home() {
  return (
    <main>
      <BannerComponent>
        <BlurAreaComponent />
      </BannerComponent>
      <IntroduceComponent />
      <AboutComponent />
      <RoomComponent />
      <MenuSlideComponent />
      <TransportComponent />
    </main>
  );
}
