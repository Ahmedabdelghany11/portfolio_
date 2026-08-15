import SectionTitle from "../../components/SectionTitle/SectionTitle";
import aboutInfo from "../../data/aboutInfo";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle subtitle="Get to know me" title="About Me" />

        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a Frontend Developer focused on building responsive and
              user-friendly web applications using modern JavaScript
              technologies.
            </p>

            <p>
              I mainly work with React.js and its ecosystem, with hands-on
              experience using TypeScript, Redux Toolkit, React Query, and Vite.
            </p>

            <p>
              I enjoy turning ideas and designs into clean, maintainable, and
              responsive user interfaces.
            </p>
          </div>

          <div className="about__info">
            {aboutInfo.map((item) => (
              <div className="about__info-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
