import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle
          subtitle="What I work with"
          title="Skills & Technologies"
        />

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
