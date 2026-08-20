import aboutImage from "../../assets/images/avatar.jpeg";

import "./_about.scss";

const highlights = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Building scalable and responsive web applications with React.js.",
  },
  {
    number: "02",
    title: "API & State Management",
    text: "Working with REST APIs, Redux Toolkit, and React Query for data-driven applications.",
  },
  {
    number: "03",
    title: "Clean & Maintainable UI",
    text: "Creating reusable components with a strong focus on performance and user experience.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* ========================================
            Header
        ======================================== */}

        <div className="about__header">
          <span className="about__eyebrow">About Me</span>

          <h2 className="about__title">
            Turning ideas into
            <span> scalable interfaces.</span>
          </h2>
        </div>

        {/* ========================================
            Main Content
        ======================================== */}

        <div className="about__content">
          {/* ========================================
              Visual
          ======================================== */}

          <div className="about__visual">
            <div className="about__image-wrapper">
              <img
                src={aboutImage}
                alt="Ahmed Abdelghany"
                className="about__image"
              />
            </div>

            <div className="about__image-glow" />

            <div className="about__identity">
              <span className="about__identity-name">Ahmed Abdelghany</span>

              <span className="about__identity-role">Frontend Engineer</span>
            </div>
          </div>

          {/* ========================================
              Information
          ======================================== */}

          <div className="about__info">
            {/* ========================================
                Story
            ======================================== */}

            <div className="about__story">
              <p className="about__lead">
                I'm a Frontend Developer focused on building scalable,
                responsive, and maintainable web applications.
              </p>

              <p>
                I work mainly with React.js and modern frontend technologies,
                with hands-on experience building production-level web
                applications and reusable user interfaces.
              </p>

              <p>
                My work combines frontend development, API integration, state
                management, and responsive design to turn requirements and ideas
                into reliable web experiences.
              </p>
            </div>

            {/* ========================================
                Highlights
            ======================================== */}

            <div className="about__highlights">
              {highlights.map((highlight) => (
                <div className="about__highlight" key={highlight.number}>
                  <span className="about__highlight-number">
                    {highlight.number}
                  </span>

                  <div className="about__highlight-content">
                    <div className="about__highlight-heading">
                      <h3>{highlight.title}</h3>

                      <span
                        className="about__highlight-arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>

                    <p>{highlight.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================
            Facts
        ======================================== */}

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
