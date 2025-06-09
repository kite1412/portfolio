import { useState } from "react";
import { sectionStrings } from "../consts/sections";
import GithubFilled from "../assets/github-filled.svg?react";
import Github from "../assets/github.svg?react";

export default function Header({ className = "" }: { className?: string }) {
  const [currentSection, setCurrentSection] = useState(sectionStrings[0]);

  return (
    <div
      className={`
        w-full h-[80px] bg-background flex justify-between items-center px-8
        ${className}
      `}
    >
      <GithubFilled 
        className="size-[32px] cursor-pointer"
        onClick={() => window.open("https://github.com/kite1412", "_blank")} 
      />
      <div className="flex gap-10">
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
      <div 
        className="flex gap-2 items-center select-none cursor-pointer"
        onClick={() => window.open("https://github.com/kite1412/react-simple-portfolio", "_blank")}
      >
        <Github className="size-sm" />
        <span className="text-sm">Portfolio Repo</span>
      </div>
    </div>
  );
}
