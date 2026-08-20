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
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: TbCode },
    ],
  },
  {
    number: "02",
    title: "State & Data",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Query", icon: SiReact },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    number: "03",
    title: "Styling & UI",
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
    skills: [
      { name: "Authentication", icon: TbShieldLock },
      { name: "Reusable Components", icon: TbComponents },
      { name: "Performance Optimization", icon: TbGauge },
    ],
  },
  {
    number: "05",
    title: "Tools & Build",
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

          <h2 className="skills__title">Skills & Technologies</h2>

          <p className="skills__intro">
            The technologies, tools, and frontend practices I use to build
            modern and maintainable web applications.
          </p>
        </div>

        <div className="skills__list">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.number}>
              <div className="skills__group-meta">
                <span className="skills__number">{group.number}</span>

                <h3 className="skills__group-title">{group.title}</h3>
              </div>

              <div className="skills__items">
                {group.skills.map(({ name, icon: Icon }) => (
                  <div className="skills__item" key={name}>
                    <Icon className="skills__icon" aria-hidden="true" />

                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
