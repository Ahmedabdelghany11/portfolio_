import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle subtitle="What I've built" title="Featured Projects" />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
