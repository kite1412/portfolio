import { useRef } from "react";
import DoubleChevronDown from "./assets/double-chevron-down.svg?react";
import Header from "./components/Header";
import AboutMeSection from "./sections/AboutMeSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col relative">
      <Header className="fixed z-10" />
      <div className="px-60 pt-[80px]">
        <LandingPage />
        <AboutMeSection ref={aboutRef} />
        <SkillSection ref={skillRef} />
        <ProjectSection ref={projectRef} />

      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-4 items-center justify-center">
      <h1>Hi, I'm Natha Raditya Rauf</h1>
      I plan, design, and build things.
      <DoubleChevronDown className="mt-[80px] animate-bounce" />
    </div>
  );
}
