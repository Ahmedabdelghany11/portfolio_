function ExperienceCard({
  company,
  role,
  location,
  startDate,
  endDate,
  description,
  technologies,
}) {
  return (
    <article className="experience-card">
      <div className="experience-card__date">
        <span>{startDate}</span>
        <span>-</span>
        <span>{endDate}</span>
      </div>

      <div className="experience-card__content">
        <p className="experience-card__company">{company}</p>

        <h3 className="experience-card__role">{role}</h3>

        <p className="experience-card__location">{location}</p>

        <p className="experience-card__description">{description}</p>

        <ul className="experience-card__technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
