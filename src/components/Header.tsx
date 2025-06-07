import { useState } from "react";

export default function Header({
  className = ""
}: {
  className?: string
}) {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  
  return (
    <div className={`w-full h-[80px] bg-background flex justify-center items-center gap-10 ${className}`}>
      {
        sections.map(s => (
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
        ))
      }
    </div>
  );
}

const sections = [
  "about",
  "experience",
  "project",
  "contact",
];