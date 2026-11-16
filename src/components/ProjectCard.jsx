export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <span className={'st ' + project.status.kind}>{project.status.label}</span>
      <div className="ct">
        <h3>{project.title}</h3>
        <p className="sub">{project.subtitle}</p>
        <ul>
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="cb">
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="lk">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
              {...(link.placeholder ? { 'data-placeholder': link.placeholder } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
