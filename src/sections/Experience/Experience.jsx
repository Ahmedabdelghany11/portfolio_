import experiences from "../../data/experience";

import "./_experience.scss";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__header">
          <span className="experience__eyebrow">
            Experience
          </span>

          <div className="experience__heading">
            <h2 className="experience__title">
              Where I've worked.
            </h2>

            <p className="experience__intro">
              Professional experience building production web
              applications and responsive interfaces with modern
              frontend technologies.
            </p>
          </div>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience, index) => (
            <article
              className="experience__item"
              key={experience.number}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__rail">
                <span className="experience__dot" />

                {index !== experiences.length - 1 && (
                  <span className="experience__line" />
                )}
              </div>

              <div className="experience__content">
                <span className="experience__company">
                  {experience.company}
                </span>

                <h3 className="experience__role">
                  {experience.role}
                </h3>

                <p className="experience__description">
                  {experience.description}
                </p>

                <div className="experience__technologies">
                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
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