import "./_project-card.scss";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Preview */}
      <div className="project-card__preview">
        <img src={project.image} alt={`${project.name} project preview`} />

        {project.live && (
          <a
            className="project-card__preview-link"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live demo`}
          >
            ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className="project-card__content">
        {/* Meta */}
        <div className="project-card__meta">
          <span className="project-card__number">{project.number}</span>

          <span className="project-card__category">{project.category}</span>
        </div>

        {/* Main Content */}
        <div className="project-card__main">
          <h3 className="project-card__title">{project.name}</h3>

          <p className="project-card__description">{project.description}</p>
        </div>

        {/* Bottom */}
        <div className="project-card__bottom">
          <div className="project-card__technologies">
            {project.technologies.map((technology) => (
              <span key={technology} className="project-card__technology">
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
                GitHub ↗
              </a>
            )}

            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
