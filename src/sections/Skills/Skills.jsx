import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

import {
  TbApi,
  TbCode,
  TbComponents,
  TbGauge,
  TbShieldLock,
} from "react-icons/tb";

import "./_skills.scss";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Core technologies I use to build interfaces.",
    skills: [
      { name: "React.js", icon: SiReact, featured: true },
      { name: "TypeScript", icon: SiTypescript, featured: true },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: TbCode },
    ],
  },
  {
    number: "02",
    title: "State & Data",
    description: "Managing application state and server data.",
    skills: [
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        featured: true,
      },
      {
        name: "React Query",
        icon: SiReact,
        featured: true,
      },
      {
        name: "REST APIs",
        icon: TbApi,
      },
    ],
  },
  {
    number: "03",
    title: "Styling & UI",
    description: "Tools for responsive and consistent interfaces.",
    skills: [
      { name: "SASS", icon: SiSass },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Styled Components", icon: TbComponents },
      { name: "Responsive Design", icon: TbGauge },
    ],
  },
  {
    number: "04",
    title: "Development",
    description: "Practices that shape how I build applications.",
    skills: [
      { name: "Authentication", icon: TbShieldLock },
      { name: "Reusable Components", icon: TbComponents },
      { name: "Performance Optimization", icon: TbGauge },
    ],
  },
  {
    number: "05",
    title: "Tools & Build",
    description: "Tools I use throughout the development workflow.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="skills__eyebrow">What I Work With</span>

          <div className="skills__heading">
            <h2 className="skills__title">Skills & Technologies</h2>

            <p className="skills__intro">
              A practical stack built around React, modern frontend development,
              and production web applications.
            </p>
          </div>
        </div>

        <div className="skills__list">
          {skillGroups.map((group) => (
            <article className="skills__group" key={group.number}>
              <div className="skills__meta">
                <span className="skills__number">{group.number}</span>

                <div>
                  <h3 className="skills__group-title">{group.title}</h3>

                  <p className="skills__group-description">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="skills__items">
                {group.skills.map(({ name, icon: Icon, featured }) => (
                  <div
                    className={`skills__item ${featured ? "is-featured" : ""}`}
                    key={name}
                  >
                    <Icon className="skills__icon" aria-hidden="true" />

                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
