import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function LoadingPAge() {
  return (
    <section className="w-full py-32 max-w-md flex justify-center items-center">
      <AiOutlineLoading3Quarters size={28} className="animate-spin" />;
    </section>
  );
}
