const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "State & Data",
    skills: ["Redux Toolkit", "React Query", "REST APIs"],
  },
  {
    number: "03",
    title: "Styling & UI",
    skills: ["SASS", "Tailwind CSS", "Styled Components", "Responsive Design"],
  },
  {
    number: "04",
    title: "Development",
    skills: [
      "Authentication",
      "Reusable Components",
      "Performance Optimization",
    ],
  },
  {
    number: "05",
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "Webpack"],
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
            Technologies and development practices I use to build modern,
            responsive, and maintainable frontend applications.
          </p>
        </div>

        <div className="skills__list">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.number}>
              <span className="skills__number">{group.number}</span>

              <h3 className="skills__group-title">{group.title}</h3>

              <div className="skills__items">
                {group.skills.map((skill) => (
                  <span className="skills__item" key={skill}>
                    {skill}
                  </span>
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
