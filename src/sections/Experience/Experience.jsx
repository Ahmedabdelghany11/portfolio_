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

const education = [
  {
    number: "01",
    institution: "Minufiyah University",
    degree: "Bachelor's Degree in Physics and Computer Science",
    period: "2018 — 2022",
    description: "Short description...",
  },
];

const certifications = [
  // Add your real certifications / courses here.
  // Example:
  // {
  //   number: "01",
  //   name: "Course / Certification Name",
  //   issuer: "Platform / Institution",
  //   period: "2024",
  //   description: "Short description...",
  //   credential: "",
  // },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        {/* ==============================
            Header
        ============================== */}

        <div className="experience__header">
          <span className="experience__eyebrow">
            Professional Background
          </span>

          <h2 className="experience__title">Where I've worked</h2>

          <p className="experience__intro">
            My professional experience, education, and continuous learning
            journey in frontend development and modern web technologies.
          </p>
        </div>

        {/* ==============================
            Experience
        ============================== */}

        <div className="experience__section">
          <div className="experience__section-header">
            <span className="experience__section-number">01</span>

            <h3 className="experience__section-title">Experience</h3>
          </div>

          <div className="experience__list">
            {experiences.map((experience) => (
              <article
                className="experience__item"
                key={experience.number}
              >
                <span className="experience__number">
                  {experience.number}
                </span>

                <div className="experience__period">
                  {experience.period}
                </div>

                <div className="experience__content">
                  <h4 className="experience__company">
                    {experience.company}
                  </h4>

                  <h5 className="experience__role">
                    {experience.role}
                  </h5>

                  <p className="experience__description">
                    {experience.description}
                  </p>

                  <div className="experience__technologies">
                    {experience.technologies.map((technology) => (
                      <span
                        className="experience__technology"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ==============================
            Education
        ============================== */}

        {education.length > 0 && (
          <div className="experience__section experience__section--education">
            <div className="experience__section-header">
              <span className="experience__section-number">02</span>

              <h3 className="experience__section-title">
                Education
              </h3>
            </div>

            <div className="experience__list">
              {education.map((item) => (
                <article
                  className="experience__item"
                  key={item.number}
                >
                  <span className="experience__number">
                    {item.number}
                  </span>

                  <div className="experience__period">
                    {item.period}
                  </div>

                  <div className="experience__content">
                    <h4 className="experience__company">
                      {item.institution}
                    </h4>

                    <h5 className="experience__role">
                      {item.degree}
                    </h5>

                    {item.description && (
                      <p className="experience__description">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ==============================
            Certifications & Courses
        ============================== */}

        {certifications.length > 0 && (
          <div className="experience__section experience__section--certifications">
            <div className="experience__section-header">
              <span className="experience__section-number">
                03
              </span>

              <h3 className="experience__section-title">
                Certifications & Courses
              </h3>
            </div>

            <div className="experience__list">
              {certifications.map((item) => (
                <article
                  className="experience__item"
                  key={item.number}
                >
                  <span className="experience__number">
                    {item.number}
                  </span>

                  <div className="experience__period">
                    {item.period}
                  </div>

                  <div className="experience__content">
                    <h4 className="experience__company">
                      {item.name}
                    </h4>

                    <h5 className="experience__role">
                      {item.issuer}
                    </h5>

                    {item.description && (
                      <p className="experience__description">
                        {item.description}
                      </p>
                    )}

                    {item.credential && (
                      <a
                        className="experience__credential"
                        href={item.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Credential ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;