const experiences = [
  {
    number: "01",
    company: "Nami",
    role: "Frontend Developer",
    period: "May 2024 — Jan 2025",
    description:
      "Built and maintained production web applications using React.js and modern frontend technologies. Translated Figma designs into responsive interfaces and worked with REST APIs and reusable components.",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "React Query",
    ],
  },
  {
    number: "02",
    company: "GTE",
    role: "Frontend Developer Intern",
    period: "Mar 2024 — May 2024",
    description:
      "Developed reusable React components, implemented UI improvements, fixed frontend issues, and collaborated with senior developers using Git and GitHub.",
    technologies: ["React.js", "JavaScript", "Git", "GitHub"],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        {/* Header */}
        <div className="experience__header">
          <span className="experience__eyebrow">Experience</span>

          <h2 className="experience__title">Where I've worked</h2>

          <p className="experience__intro">
            My professional experience building and improving frontend
            applications with modern web technologies.
          </p>
        </div>

        {/* Experience List */}
        <div className="experience__list">
          {experiences.map((experience) => (
            <article className="experience__item" key={experience.number}>
              <span className="experience__number">{experience.number}</span>

              <div className="experience__period">{experience.period}</div>

              <div className="experience__content">
                <h3 className="experience__company">{experience.company}</h3>

                <h4 className="experience__role">{experience.role}</h4>

                <p className="experience__description">
                  {experience.description}
                </p>

                <div className="experience__technologies">
                  {experience.technologies.map((technology) => (
                    <span className="experience__technology" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
