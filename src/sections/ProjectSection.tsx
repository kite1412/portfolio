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
import Express from "../assets/Express.svg?react";
import PersonCircle from "../assets/person-circle.svg?react";
import About from "../assets/about.svg?react";
import ReactLogo from "../assets/react.svg?react";
import JavaScript from "../assets/javascript.svg?react";
import Tailwind from "../assets/tailwind.svg?react";
import kiyayKoki from "../assets/kiyay-koki-logo.svg";
import movieHub from "../assets/moviehub-logo.svg";
import csirt from "../assets/csirt-logo.svg";
import books from "../assets/books.svg";

export default function ProjectSection({
  ref
}: {
  ref?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <SectionLayout ref={ref} section={projectSection.displayName}>
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-20 px-20">
          {featuredProjects.map((p, i) => (
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
        <SectionLayout ref={ref} section="Other Project" ignorePadding={true}>
          <div className="grid grid-cols-2 gap-8">
            {
              otherProjects.map(p => (
                <ProjectDetailSmall
                  name={p.name}
                  desc={p.desc}
                  img={p.img}
                  role={p.role}
                  type={p.type}
                  techImgs={p.techImgs}
                  githubRepo={p.githubRepo}
                  coverClassName={p.coverClassName}
                />
              ))
            }
          </div>
        </SectionLayout>
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
  coverType = "object-fill",
  coverClassName = ""
}: Project & {
  reverse?: boolean;
  coverClassName?: string;
}) {
  const reverseText = reverse ? "text-end" : "text-start";
  const infoIcon = "size-[18px]";

  return (
    <div className={`flex gap-6 w-full ${reverse && "flex-row-reverse"}`}>
      <img
        src={img}
        className={`${coverClassName || "w-[45%] h-fit aspect-[3/2] rounded-[16px]"} ${coverType}`}
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
        {
          githubRepo && <div
            className="flex gap-2 cursor-pointer select-none items-center"
            onClick={() => window.open(githubRepo, "_blank")}
          >
            <GitHub className="size-[22px]" />
            GitHub Repo
          </div>
        }
      </div>
    </div>
  );
}

function ProjectDetailSmall({
  name,
  desc,
  img,
  role,
  type,
  techImgs,
  githubRepo,
  coverClassName = ""
}: Project & {
  coverClassName?: string;
}) {
  return <ProjectDetail 
    name={name}
    desc={desc}
    img={img}
    role={role}
    type={type}
    techImgs={techImgs}
    githubRepo={githubRepo}
    coverClassName={`size-[60px] rounded-[8px] ${coverClassName}`}
  />;
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

const featuredProjects: Array<Project> = [
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

const coverClassName = "p-2";

const otherProjects: Array<Project & { coverClassName?: string; }> = [
  {
    name: "Kiyay Koki",
    desc: "An e-commerce platform for selling goldfish, along with fish feed and aquarium supplies.",
    img: kiyayKoki,
    role: "Frontend Dev",
    type: "Team project",
    techImgs: [
      <JavaScript className={icon} />,
      <ReactLogo className={icon} />,
      <Tailwind className={icon} />
    ],
    githubRepo: "https://github.com/kite1412/react-kiyay-koki",
    coverClassName: `bg-black ${coverClassName}`
  },
  {
    name: "MovieHub",
    desc: "A web application for discovering movies using the TMDB API.",
    img: movieHub,
    role: "Frontend Dev",
    type: "Team project",
    techImgs: [
      <JavaScript className={icon} />,
      <ReactLogo className={icon} />
    ],
    githubRepo: "https://github.com/kite1412/react-moviehub",
    coverClassName: `bg-[#DA70D6] ${coverClassName}`
  },
  {
    name: "CSIRT System",
    desc: "A web-based CSIRT system designed to facilitate efficient incident tracking, team collaboration, and response management for cybersecurity operations.",
    img: csirt,
    role: "Fullstack Dev",
    type: "Team project",
    techImgs: [
      <JavaScript className={icon} />,
      <ReactLogo className={icon} />,
      <Tailwind className={icon} />,
      <Express className={icon} />
    ],
    coverClassName: `bg-[#081423] ${coverClassName}`
  },
  {
    name: "School LMS",
    desc: "A Learning Management System that enables daily schedule display, classroom material sharing, assignment management, and student attendance tracking.",
    img: books,
    role: "Fullstack Dev",
    type: "Team project",
    techImgs: [
      <JavaScript className={icon} />,
      <ReactLogo className={icon} />,
      <Tailwind className={icon} />,
      <Express className={icon} />
    ],
    githubRepo: "https://github.com/kite1412/react-lms",
    coverClassName: `bg-white ${coverClassName}`
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
