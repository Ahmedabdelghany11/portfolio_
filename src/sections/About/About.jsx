// import SectionTitle from "../../components/SectionTitle/SectionTitle";

// const focusAreas = [
//   {
//     number: "01",
//     title: "Reusable Components",
//   },
//   {
//     number: "02",
//     title: "API Integration",
//   },
//   {
//     number: "03",
//     title: "Responsive Interfaces",
//   },
//   {
//     number: "04",
//     title: "ٌMaintainable & Scalable Web Applications",
//   },
// ];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="about__eyebrow">About Me</span>

          <h2 className="about__title">
            Building interfaces with a focus on clarity, usability, and
            scalability.
          </h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a Frontend Developer focused on building scalable and
              responsive web applications.
            </p>

            <p>
              I work mainly with React.js and modern frontend technologies, with
              experience building production web applications and reusable UI
              components.
            </p>

            <p>
              I enjoy turning requirements and designs into clean, maintainable,
              and responsive interfaces.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__highlight">
              <span className="about__highlight-number">01</span>

              <div>
                <h3>Frontend Development</h3>
                <p>
                  Building responsive interfaces with React.js and modern
                  frontend technologies.
                </p>
              </div>
            </div>

            <div className="about__highlight">
              <span className="about__highlight-number">02</span>

              <div>
                <h3>Production Applications</h3>
                <p>
                  Experience working on real-world web applications and
                  marketplace platforms.
                </p>
              </div>
            </div>

            <div className="about__highlight">
              <span className="about__highlight-number">03</span>

              <div>
                <h3>Physics & Computer Science</h3>
                <p>
                  Background combining physics, computer science, and
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
