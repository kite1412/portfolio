import React, { useRef, type JSX } from "react";
import DoubleChevronDown from "./assets/double-chevron-down.svg?react";
import Header from "./components/Header";
import AboutMeSection from "./sections/AboutMeSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import Footer from "./components/Footer";
import { motion, useInView } from "framer-motion";

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col relative">
      <Header className="fixed z-10" />
      <div className="px-60 pt-[80px] flex flex-col">
        <LandingPage />
        <AnimateVisibility ref={aboutRef}>
          <AboutMeSection ref={aboutRef} />
        </AnimateVisibility>
        <AnimateVisibility ref={skillRef}>
          <SkillSection ref={skillRef} />
        </AnimateVisibility>
        <AnimateVisibility ref={projectRef}>
          <ProjectSection ref={projectRef} />
        </AnimateVisibility>
      </div>
      <Footer />
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

function AnimateVisibility({
  ref,
  children
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  children: JSX.Element;
}) {
  const isInView = useInView(ref, { once: true, amount: "some" });

  return <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={isInView && { opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: "easeOut" }}
  >
    {children}
  </motion.div>
}