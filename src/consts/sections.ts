export const sectionStrings = [
  "About",
  "Skill",
  "Project",
  "Contact",
];

export const aboutSection: Section = {
  name: "About",
  index: 0,
  displayName: "About Me",
}

export const skillSection: Section = {
  name: "Skill",
  index: 1,
  displayName: "Technologies I Use",
}

export const projectSection: Section = {
  name: "Project",
  index: 2,
  displayName: "Featured Project",
}

export const contactSection: Section = {
  name: "Contact",
  index: 3,
  displayName: "Contact",
}

type Section = {
  name: string,
  index: number,
  displayName: string,
}