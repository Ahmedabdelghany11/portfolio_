import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import "./_technology-strip.scss";

const technologies = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    name: "React Query",
    icon: SiReact,
  },
  {
    name: "SASS",
    icon: SiSass,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Vite",
    icon: SiVite,
  },
];

function TechnologyStrip() {
  return (
    <section className="technology-strip">
      <div className="container">
        <div className="technology-strip__list">
          {technologies.map(({ name, icon: Icon }) => (
            <div className="technology-strip__item" key={name}>
              <Icon className="technology-strip__icon" aria-hidden="true" />

              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStrip;
