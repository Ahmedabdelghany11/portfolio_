import SectionTitle from "../../components/SectionTitle/SectionTitle";

const focusAreas = [
  {
    number: "01",
    title: "Reusable Components",
  },
  {
    number: "02",
    title: "API Integration",
  },
  {
    number: "03",
    title: "Responsive Interfaces",
  },
  {
    number: "04",
    title: "ٌMaintainable & Scalable Web Applications",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="Building interfaces with purpose"
        />

        <div className="about__content">
          <div className="about__intro">
            <p>
              I'm a Frontend Developer focused on building responsive, scalable
              web applications with React.js and modern frontend technologies.
            </p>

            <p>
              My experience includes working with TypeScript, Redux Toolkit,
              React Query, REST APIs, and reusable component architectures. I
              care about writing maintainable code, building clear user
              interfaces, and turning designs into reliable web experiences.
            </p>
          </div>

          <div className="about__focus">
            {focusAreas.map((area) => (
              <div className="about__focus-item" key={area.number}>
                <span className="about__focus-number">{area.number}</span>

                <h3>{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
