function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={`${title} project preview`} />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            Project Preview
          </div>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <ul className="project-card__technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="project-card__actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
              >
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
