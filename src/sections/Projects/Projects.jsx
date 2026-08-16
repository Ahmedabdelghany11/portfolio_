import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects__header">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects"
          />

          <p className="projects__intro">
            A selection of web applications and digital products
            I've worked on using modern frontend technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;