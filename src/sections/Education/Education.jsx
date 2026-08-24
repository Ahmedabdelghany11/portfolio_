import "./_education.scss";

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="education__header">
          <span className="education__eyebrow">Education</span>

          <h2 className="education__title">Academic background.</h2>
        </div>

        <div className="education__content">
          <span className="education__number">01</span>

          <div className="education__main">
            <span className="education__degree">Bachelor's Degree</span>

            <h3 className="education__field">Physics & Computer Science</h3>

            <div className="education__details">
              <span>Minufiyah University</span>
              <span>Sep 2018 — July 2022</span>
            </div>

            <div className="education__result">
              <span>Very Good</span>
              <span>86%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
