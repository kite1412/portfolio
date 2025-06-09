import ReactLogo from "../assets/react.svg?react";
import TypeScript from "../assets/typescript.svg?react";
import Tailwind from "../assets/tailwind.svg?react";

export default function Footer() {
  const icon = "size-[32px]"

  return (
    <div className={`
      w-full bg-[#2C47AA] min-h-[180px] py-5 px-10 text-background
      flex flex-col
    `}>
      <div className="flex flex-col gap-2">
        Built with:
        <div className="flex gap-4 items-center">
          <TypeScript className={icon} />
          <ReactLogo className={icon} />
          <Tailwind className={icon} />
        </div>
      </div>
      <span className="mt-auto mx-auto">
        Natha Raditya Rauf - 2025
      </span>
    </div>
  );
}