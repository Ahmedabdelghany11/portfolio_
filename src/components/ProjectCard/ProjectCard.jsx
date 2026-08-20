import "./_project-card.scss";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* ========================================
          Preview
      ======================================== */}

      <div className="project-card__preview">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
        />

        <div className="project-card__preview-overlay" />

        <div className="project-card__preview-meta">
          <span className="project-card__number">
            {project.number}
          </span>

          <span className="project-card__category">
            {project.category}
          </span>
        </div>

        {project.live && (
          <a
            className="project-card__preview-link"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live demo`}
          >
            <span>↗</span>
          </a>
        )}
      </div>

      {/* ========================================
          Content
      ======================================== */}

      <div className="project-card__content">
        {/* Title */}

        <div className="project-card__heading">
          <span className="project-card__eyebrow">
            Featured Project
          </span>

          <h3 className="project-card__title">
            {project.name}
          </h3>
        </div>

        {/* Description */}

        <p className="project-card__description">
          {project.description}
        </p>

        {/* ========================================
            Features
        ======================================== */}

        {project.features?.length > 0 && (
          <div className="project-card__features">
            <span className="project-card__features-label">
              Key Features
            </span>

            <div className="project-card__features-list">
              {project.features.slice(0, 4).map((feature) => (
                <span
                  className="project-card__feature"
                  key={feature}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ========================================
            Footer
        ======================================== */}

        <div className="project-card__footer">
          <div className="project-card__technologies">
            {project.technologies.map((technology) => (
              <span
                className="project-card__technology"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="project-card__links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;