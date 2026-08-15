import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import experiences from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle subtitle="My professional journey" title="Experience" />

        <div className="experience__list">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
