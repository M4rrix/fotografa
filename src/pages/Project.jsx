import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Project() {
  const { slug } = useParams();
  const i = projects.findIndex(p => p.slug === slug);
  const project = projects[i] ?? projects[0];

  return (
    <article className="project">
      <aside className="project-aside">
        <h1>{project.title}</h1>
        <p className="muted">{project.year} · {project.client}</p>
        <ul className="tags">{project.tags?.map(t => <li key={t}>{t}</li>)}</ul>
      </aside>

      <div className="project-body">
        {project.images.map((src, idx) => (
          <img key={idx} src={src} alt={`${project.title} ${idx+1}`} loading="lazy" />
        ))}

        <nav className="project-nav">
          {projects[i-1] && <Link to={`/work/${projects[i-1].slug}`} className="btn">← {projects[i-1].title}</Link>}
          {projects[i+1] && <Link to={`/work/${projects[i+1].slug}`} className="btn">{projects[i+1].title} →</Link>}
        </nav>
      </div>
    </article>
  );
}
