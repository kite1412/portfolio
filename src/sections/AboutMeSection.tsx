import { aboutSection } from "../consts/sections";
import SectionLayout from "../layouts/SectionLayout";
import idea from "../assets/idea.png";

export default function AboutMeSection() {
  return (
    <SectionLayout section={aboutSection.displayName}>
      <div className="w-full flex gap-10 justify-between">
        <div>
          <p>
            Hello! I’m a passionate software developer and lifelong learner who
            enjoys crafting intuitive and efficient applications that solve real
            problems. I believe that technology is a powerful tool to improve
            everyday life, and I strive to create solutions that are not only
            functional but also user-friendly and accessible to everyone.
          </p>
          <br />
          <p>
            I have a strong curiosity for exploring new technologies and
            frameworks, which keeps me motivated to continuously grow my skills
            and adapt to the ever-changing world of software development.
            Whether it’s building mobile apps, web applications, or
            experimenting with new programming languages, I embrace every
            opportunity to learn and improve.
          </p>
          <br />
          <p>
            I’m excited about the future and the chance to contribute to
            projects that inspire, challenge, and make a positive impact on
            people’s lives. Every project is a new adventure, and I’m eager to
            keep pushing my boundaries and creating meaningful experiences
            through technology.
          </p>
          <br />
          <p>Let’s build something awesome together. 🚀</p>
        </div>
        <img src={idea} className="h-[300px]" />
      </div>
    </SectionLayout>
  );
}
