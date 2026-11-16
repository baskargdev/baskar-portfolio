import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
