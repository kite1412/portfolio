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
      <div className="absolute h-screen w-full">
        <div className="absolute size-[300px] animate-color-cycle rounded-full bottom-20 right-20" />
        <div className="absolute flex gap-4 top-30 left-40">
          <div className="size-[80px] rounded-full animate-color-cycle-inverse" />
          <div className="size-[200px] rounded-full animate-color-cycle-alt" />
        </div>
        
        <style>{`
          @keyframes color-cycle {
            0%   { background-color: #4169E1; }
            33%  { background-color: #6A5ACD; }
            66%  { background-color: #00CED1; }
            100% { background-color: #4169E1; }
          }
          .animate-color-cycle {
            animation: color-cycle 4s ease-in-out infinite;
          }
          @keyframes color-cycle-inverse {
            0%   { background-color: #4169E1; }
            33%  { background-color: #00CED1; }
            66%  { background-color: #6A5ACD; }
            100% { background-color: #4169E1; }
          }
          .animate-color-cycle-inverse {
            animation: color-cycle-inverse 4s ease-in-out infinite;
          }
          @keyframes color-cycle-alt {
            0%   { background-color: #00CED1; }
            33%  { background-color: #4169E1; }
            66%  { background-color: #6A5ACD; }
            100% { background-color: #00CED1; }
          }
          .animate-color-cycle-alt {
            animation: color-cycle-alt 4s ease-in-out infinite;
          }
        `}</style>
      </div>
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
    <div className="h-[calc(100vh-80px)] relative flex flex-col gap-4 items-center justify-center">
      <h1>Hi, I'm Natha Raditya Rauf</h1>
      <span>I plan, design, and build things.</span>
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