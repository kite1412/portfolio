import Express from "../assets/Express.svg?react";
import Go from "../assets/Go.svg?react";
import Android from "../assets/android.svg?react";
import Dart from "../assets/dart.svg?react";
import Flutter from "../assets/flutter.svg?react";
import Gin from "../assets/gin.svg?react";
import Java from "../assets/java.svg?react";
import JavaScript from "../assets/javascript.svg?react";
import Kotlin from "../assets/kotlin.svg?react";
import ReactLogo from "../assets/react.svg?react";
import Tailwind from "../assets/tailwind.svg?react";
import TypeScript from "../assets/typescript.svg?react";
import Ktor from "../assets/Ktor.svg?react";
import Spring from "../assets/spring.svg?react";
import Figma from "../assets/figma.svg?react";
import JetpackCompose from "../assets/jetpack-compose.svg?react";
import { skillSection } from "../consts/sections";
import SectionLayout from "../layouts/SectionLayout";

export default function SkillSection() {
  const icon = "size-[60px] text-background";

  return (
    <SectionLayout section={skillSection.displayName}>
      <div className="flex flex-col gap-10 items-center">
        <p>
          These are several technologies that I use comfortably to bring my
          ideas to life.
        </p>
        <div className="flex flex-wrap justify-center gap-8 w-[60%]">
          <Kotlin className={icon} />
          <JavaScript className={icon} />
          <TypeScript className={icon} />
          <Java className={icon} />
          <Go className={icon} />
          <Dart className={icon} />
          <Android className={icon} />
          <JetpackCompose className={icon} />
          <Flutter className={icon} />
          <Ktor className={icon} />
          <ReactLogo className={icon} />
          <Express className={icon} />
          <Tailwind className={icon} />
          <Gin className={icon} />
          <Spring className={icon} />
          <Figma className={icon} />
        </div>
      </div>
    </SectionLayout>
  );
}
