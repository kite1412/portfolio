import type { JSX } from "react";

export default function SectionLayout({
  section,
  ref,
  children
}: {
  section: string,
  ref: React.RefObject<HTMLDivElement>,
  children: JSX.Element
}) {
  return (
    <div 
      id={section} 
      ref={ref}
      className="flex flex-col gap-6 py-10"
    >
      {children}
    </div>
  );
}