// src/pages/Intimos.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { intimo } from "../data/intimo";

const LAST_INTIMO_KEY = "intimos-last-open";

export default function Intimos() {
  // Al entrar a /intimos, si hay un álbum recordado, scrolleamos hasta él
  useEffect(() => {
    const lastSlug = sessionStorage.getItem(LAST_INTIMO_KEY);
    if (!lastSlug) return;

    const el = document.getElementById(`intimo-${lastSlug}`);
    if (!el) {
      sessionStorage.removeItem(LAST_INTIMO_KEY);
      return;
    }

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "center", behavior: "auto" });
      sessionStorage.removeItem(LAST_INTIMO_KEY);
    });
  }, []);

  // guardamos qué álbum se abrió
  const handleCardClick = (slug) => () => {
    sessionStorage.setItem(LAST_INTIMO_KEY, slug);
  };

  return (
    <section>
      {/* <h1 className="page-title">intimo</h1> */}

      <ul className="work-grid">
        {intimo.map((c) => (
          <li
            key={c.slug}
            id={`intimo-${c.slug}`}        // 👈 ancla para scrollIntoView
            className="work-item"
          >
            <Link
              to={`/intimo/${c.slug}`}
              className="card"
              onClick={handleCardClick(c.slug)}   // 👈 guardamos el slug
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
