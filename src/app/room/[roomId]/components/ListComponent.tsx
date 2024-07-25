import { FaCheck } from "react-icons/fa6";

type ListComponentProps = {
  arrayContent: string[];
  headline: string;
};

export default function ListComponent({
  arrayContent,
  headline,
}: ListComponentProps) {
  return (
    <div>
      <h2 className="border-l-4 border-[#c4a382] mb-4 text-neutral-600 font-semibold pl-3 text-2xl">
        {headline}
      </h2>
      <div className="bg-white rounded-lg py-6 px-4">
        <ul className="grid grid-cols-4 md:grid-cols-5 gap-2 lg:gap-6">
          {arrayContent.map((content) => {
            return (
              <li className="flex items-center gap-2 w-24" key={content}>
                <FaCheck className="text-[#c4a382]" />
                <p className="font-semibold text-neutral-600">{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
