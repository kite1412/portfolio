import DoubleChevronDown from "./assets/double-chevron-down.svg?react";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col relative">
      <Header className="fixed" />
      <div className="px-20 pt-[80px]">
        <LandingPage />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-4 items-center justify-center">
      <h1>
        Hi, I'm Natha Raditya Rauf
      </h1>
      I plan, design, and build things.
      <DoubleChevronDown className="mt-[80px] animate-bounce" />
    </div>
  );
}