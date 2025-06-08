import type React from "react";
import { projectSection } from "../consts/sections";
import SectionLayout from "../layouts/SectionLayout";
import taskifyPreview from "../assets/taskify-preview.png";
import mangarealmPreview from "../assets/mangarealm-preview.png";
import mockmalPreview from "../assets/mockmal-preview.png";
import type { JSX } from "react";
import Kotlin from "../assets/kotlin.svg?react";
import Android from "../assets/android.svg?react";
import JetpackCompose from "../assets/jetpack-compose.svg?react";
import Ktor from "../assets/ktor.svg?react";
import GitHub from "../assets/github.svg?react";
import Dart from "../assets/dart.svg?react";
import Flutter from "../assets/flutter.svg?react";
import PersonCircle from "../assets/person-circle.svg?react";
import About from "../assets/about.svg?react";

export default function ProjectSection({
  ref
}: {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <SectionLayout ref={ref} section={projectSection.displayName}>
      <div className="flex flex-col gap-20 px-20">
        {projects.map((p, i) => (
          <ProjectDetail
            name={p.name}
            desc={p.desc}
            img={p.img}
            role={p.role}
            type={p.type}
            techImgs={p.techImgs}
            githubRepo={p.githubRepo}
            reverse={i % 2 === 1}
            coverType={p.coverType}
          />
        ))}
      </div>
    </SectionLayout>
  );
}

function ProjectDetail({
  name,
  desc,
  img,
  role,
  type,
  techImgs,
  githubRepo,
  reverse = false,
  coverType = "object-fit"
}: Project & {
  reverse?: boolean;
}) {
  const reverseText = reverse ? "text-end" : "text-start";
  const infoIcon = "size-[18px]";

  return (
    <div className={`flex gap-6 w-full ${reverse && "flex-row-reverse"}`}>
      <img
        src={img}
        className={`w-[45%] h-fit aspect-[3/2] object-fit rounded-[16px] ${coverType}`}
      />
      <div
        className={`
        flex flex-col gap-4 w-full mt-2 ${reverse ? "items-end" : "items-start"}
      `}
      >
        <h3 className={`font-medium ${reverseText}`}>{name}</h3>
        <div className="flex flex-col gap-2">
          <ProjectInfo
            icon={<PersonCircle className={infoIcon} />}
            value={role}
            reverse={reverse}
          />
          <ProjectInfo
            icon={<About className={infoIcon} />}
            value={type}
            reverse={reverse}
          />
        </div>
        <p className={reverseText}>{desc}</p>
        <hr className="w-full" />
        <div className="flex flex-wrap gap-3">
          {techImgs.map((t) => (
            <div className="text-background">{t}</div>
          ))}
        </div>
        <div
          className="flex gap-2 cursor-pointer select-none items-center"
          onClick={() => window.open(githubRepo, "_blank")}
        >
          <GitHub className="size-[22px]" />
          GitHub Repo
        </div>
      </div>
    </div>
  );
}

function ProjectInfo({
  icon,
  value,
  reverse = false
}: {
  icon: JSX.Element;
  value: string;
  reverse?: boolean;
}) {
  return (
    <div className={`flex gap-2 items-center ${reverse && "flex-row-reverse"}`}>
      {icon}
      <span className="text-xs">{value}</span>
    </div>
  );
}

const icon = "size-[24px]";

const projects: Array<Project> = [
  {
    name: "Taskify",
    desc: "A fully functional Android task management application that delivers reliability, ease of use, and an intuitive design to enhance productivity.",
    img: taskifyPreview,
    role: "Mobile Dev",
    type: "Personal project",
    techImgs: [
      <Kotlin className={icon} />,
      <Android className="size-[34px]" />,
      <JetpackCompose className={icon} />
    ],
    githubRepo: "https://github.com/kite1412/android-taskify"
  },
  {
    name: "MangaRealm",
    desc: "MangaDex Client application for Android built using Kotlin Multiplatform. Read, manage, personalize, and keep track of your manga list.",
    img: mangarealmPreview,
    role: "Mobile Dev",
    type: "Personal project",
    techImgs: [
      <Kotlin className={icon} />,
      <Android className="size-[34px]" />,
      <JetpackCompose className={icon} />,
      <Ktor className={icon} />
    ],
    githubRepo: "https://github.com/kite1412/kmp-mangarealm",
    coverType: "object-cover"
  },
  {
    name: "MockMAL",
    desc: `
      An Android MAL client that uses the MAL and Jikan APIs to easily update your anime and manga list on your mobile device.
    `,
    img: mockmalPreview,
    role: "Mobile Dev",
    type: "Personal project",
    techImgs: [
      <Dart className={icon} />,
      <Flutter className={icon} />,
      <Kotlin className={icon} />,
      <Android className="size-[34px]" />
    ],
    githubRepo: "https://github.com/kite1412/flutter-mock-mal",
    coverType: "object-cover"
  }
];

type Project = {
  name: string;
  desc: string;
  img: string;
  role: string;
  type: string;
  techImgs: Array<JSX.Element>;
  githubRepo?: string;
  coverType?: string;
};
