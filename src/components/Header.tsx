import { useState } from "react";
import { sectionStrings } from "../consts/sections";

export default function Header({ className = "" }: { className?: string }) {
  const [currentSection, setCurrentSection] = useState(sectionStrings[0]);

  return (
    <div
      className={`w-full h-[80px] bg-background flex justify-center items-center gap-10 ${className}`}
    >
      {sectionStrings.map((s) => (
        <div
          className={`
              select-none cursor-pointer ${
                currentSection === s ? "text-secondary" : "text-black"
              }
            `}
          onClick={() => setCurrentSection(s)}
        >
          {s}
        </div>
      ))}
    </div>
  );
}
