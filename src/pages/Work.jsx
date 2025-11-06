// src/pages/Work.jsx
// src/pages/Work.jsx
import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    const site = document.querySelector(".site");
    if (!site) return;

    // Activa “modo Work” y setea la 1ª imagen (la que se ve detrás del nav)
    site.classList.add("is-work");
    site.style.setProperty("--work-bg", `url('/assets/fondo-1.jpg')`);

    return () => {
      site.classList.remove("is-work");
      site.style.removeProperty("--work-bg");
    };
  }, []);

  // Las otras dos imágenes, del mismo tamaño/formato que la primera
  const moreHeros = [
    "/assets/fondo-1.jpeg",
    "/assets/fondo-2.jpeg",
    "/assets/fondo-3.jpeg",
  ];

  return (
    <section className="work-landing" aria-label="Work backgrounds">
      {moreHeros.map((src, i) => (
        <div
          key={i}
          className="work-hero"
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </section>
  );
}




/* 
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section>
      {<h1 className="page-title">Work</h1>
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
                  onError={(e)=>{ e.currentTarget.src=`/assets/bestia/952bc0231000219.6880fc25ddff3.webp`; }}
                />
              </div>
              <div className="meta">
                <span>{p.title}</span>
                <span className="muted">{p.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>}
    </section>
  );
} 
  */
