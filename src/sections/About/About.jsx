import aboutImage from "../../assets/images/avatar.jpeg";

import "./_about.scss";

const highlights = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Building scalable and responsive web applications with React.js and modern frontend technologies.",
  },
  {
    number: "02",
    title: "API & State Management",
    text: "Working with REST APIs, Redux Toolkit, and React Query to build data-driven applications.",
  },
  {
    number: "03",
    title: "Performance & User Experience",
    text: "Creating reusable interfaces with a strong focus on maintainability, responsiveness, and usability.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="about__eyebrow">About Me</span>

          <h2 className="about__title">
            Turning ideas into
            <span> scalable interfaces.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__visual">
            <div className="about__image-wrapper">
              <img
                src={aboutImage}
                alt="Ahmed Abdelghany"
                className="about__image"
              />
            </div>

            <div className="about__image-glow" />

            <div className="about__image-label">
              <span></span>
              <span>FRONTEND / REACT</span>
            </div>
          </div>

          <div className="about__info">
            <div className="about__story">
              <p className="about__lead">
                I'm a Frontend Developer focused on building scalable,
                responsive, and maintainable web applications.
              </p>

              <p>
                I work mainly with React.js and modern frontend technologies,
                with hands-on experience building production-level web
                applications and reusable interfaces.
              </p>

              <p>
                I enjoy turning requirements and designs into clean, reliable
                experiences while keeping performance, responsiveness, and
                maintainability in mind.
              </p>
            </div>

            <div className="about__highlights">
              {highlights.map((highlight) => (
                <article className="about__highlight" key={highlight.number}>
                  <span className="about__highlight-number">
                    {highlight.number}
                  </span>

                  <div className="about__highlight-content">
                    <h3>{highlight.title}</h3>

                    <p>{highlight.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about__facts">
          <span>Computer Science</span>
          <span>Production Web Applications</span>
          <span>REST API Integration</span>
        </div>
      </div>
    </section>
  );
}

export default About;
