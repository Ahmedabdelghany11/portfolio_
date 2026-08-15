function SkillCard({ category, items }) {
  return (
    <article className="skill-card">
      <h3 className="skill-card__title">{category}</h3>

      <ul className="skill-card__list">
        {items.map((item) => (
          <li className="skill-card__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
