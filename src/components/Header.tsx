import { sectionStrings } from "../consts/sections";
import GithubFilled from "../assets/github-filled.svg?react";
import Github from "../assets/github.svg?react";

export default function Header({
  currentSection,
  setCurrentSection,
  onSectionClick,
  className = ""
}: { 
  currentSection: string;
  setCurrentSection: (s: string) => void;
  onSectionClick: (s: string) => void;
  className?: string; 
}) {
  return (
    <div
      className={`
        w-full h-[80px] bg-background flex justify-between items-center px-8
        ${className}
      `}
    >
      <div className="flex flex-1/10">
        <GithubFilled 
          className="size-[32px] cursor-pointer"
          onClick={() => window.open("https://github.com/kite1412", "_blank")} 
        />
      </div>
      <div className="flex gap-10 flex-8/10 justify-center">
        {sectionStrings.map((s) => (
          <div
            className={`
                select-none cursor-pointer ${
                  currentSection === s ? "text-secondary" : "text-black"
                }
              `}
            onClick={() => {
              setCurrentSection(s);
              onSectionClick(s);
            }}
          >
            {s}
          </div>
        ))}
      </div>
      <div 
        className="flex gap-2 justify-end items-center select-none cursor-pointer flex-1/10"
        onClick={() => window.open("https://github.com/kite1412/react-simple-portfolio", "_blank")}
      >
        <Github className="size-sm" />
        <span className="text-sm">Portfolio Repo</span>
      </div>
    </div>
  );
}
