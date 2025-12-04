// src/pages/Sesiones.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sesiones } from "../data/sesiones";

const LAST_SESSION_KEY = "sesiones-last-open";

export default function Sesiones() {
  useEffect(() => {
    const lastSlug = sessionStorage.getItem(LAST_SESSION_KEY);
    if (!lastSlug) return; // 👈 si no hay nada guardado, NO tocamos el scroll

    const el = document.getElementById(`session-${lastSlug}`);
    if (!el) {
      sessionStorage.removeItem(LAST_SESSION_KEY);
      return;
    }

    // Esperamos al siguiente frame para asegurarnos que todo está renderizado
    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "center", behavior: "auto" });
      sessionStorage.removeItem(LAST_SESSION_KEY); // lo usamos una vez y listo
    });
  }, []);

  // guardamos qué álbum se abrió
  const handleCardClick = (slug) => () => {
    sessionStorage.setItem(LAST_SESSION_KEY, slug);
  };

  return (
    <section>
      <ul className="work-grid">
        {sesiones.map((c) => (
          <li
            key={c.slug}
            id={`session-${c.slug}`}   // 👈 ancla para scrollIntoView
            className="work-item"
          >
            <Link
              to={`/sesiones/${c.slug}`}
              className="card"
              onClick={handleCardClick(c.slug)} // 👈 guardamos ese slug
            >
              <div className="ratio">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  width="1600"
                  height="1000"
                  draggable="false"
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
