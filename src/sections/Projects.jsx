import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionHeading
        number="04"
        eyebrow="SELECTED WORK"
        title="Projects that show range."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.category}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-bottom">
              <div className="project-stack">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
