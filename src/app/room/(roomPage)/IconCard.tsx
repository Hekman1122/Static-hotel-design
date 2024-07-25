type IconCardType = {
  children: React.ReactNode;
  text: string;
};

export default function IconCardComponent({ children, text }: IconCardType) {
  return (
    <div className="border-neutral-400 border-2 rounded-md flex items-center justify-center flex-col gap-3 lg:w-24 lg:h-24 w-20 h-20">
      <>{children}</>
      <p className="font-semibold text-neutral-600">{text}</p>
    </div>
  );
}
