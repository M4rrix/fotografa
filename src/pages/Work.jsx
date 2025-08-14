import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section>
      <h1 className="page-title">Work</h1>
      <ul className="work-grid">
        {projects.map(p => (
          <li key={p.slug} className="work-item">
            <Link to={`/work/${p.slug}`} className="card">
              <div className="ratio">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  width="1600" height="1000"
                  onError={(e)=>{ e.currentTarget.src=`https://picsum.photos/seed/${p.slug}/1600/1000.webp`; }}
                />
              </div>
              <div className="meta">
                <span>{p.title}</span>
                <span className="muted">{p.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
