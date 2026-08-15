function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <p className="section-title__subtitle">{subtitle}</p>

      <h2 className="section-title__title">{title}</h2>
    </div>
  );
}

export default SectionTitle;
