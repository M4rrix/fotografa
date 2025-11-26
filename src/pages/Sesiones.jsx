// src/pages/Sesiones.jsx
import { Link } from "react-router-dom";
import { sesiones } from "../data/sesiones";

export default function Sesiones() {
  return (
    <section>
       {/* <h1 className="page-title">sesiones</h1>*/}  

      <ul className="work-grid">
        {sesiones.map((c) => (
          <li key={c.slug} className="work-item">
            <Link to={`/sesiones/${c.slug}`} className="card">
              <div className="ratio">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  width="1600"
                  height="1000"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${c.slug}/1600/15.jpg`;
                  }}
                />
              </div>
              <div className="meta">
                <span>{c.title}</span>
                <span className="muted">{c.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
