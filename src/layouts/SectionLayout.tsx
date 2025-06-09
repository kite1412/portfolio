import type { JSX } from "react";

export default function SectionLayout({
  section,
  children,
  ignorePadding = false
}: {
  section: string;
  children: JSX.Element;
  ignorePadding?: boolean;
}) {
  return (
    <div id={section} className={`flex flex-col gap-20 ${!ignorePadding && "py-30"}`}>
      <div className="flex w-full justify-center items-center relative">
        <div className="absolute w-full h-[2px] bg-black rounded-2xl" />
        <h3 className="px-4 py-2 bg-background absolute">{section}</h3>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}
