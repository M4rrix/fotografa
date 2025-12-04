// src/pages/Testigos.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { testigo } from "../data/testigo";

const LAST_TESTIGO_KEY = "testigos-last-open";

export default function Testigos() {
  // Al entrar a /testigo, si hay un álbum recordado, scrolleamos hasta él
  useEffect(() => {
    const lastSlug = sessionStorage.getItem(LAST_TESTIGO_KEY);
    if (!lastSlug) return;

    const el = document.getElementById(`testigo-${lastSlug}`);
    if (!el) {
      sessionStorage.removeItem(LAST_TESTIGO_KEY);
      return;
    }

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "center", behavior: "auto" });
      sessionStorage.removeItem(LAST_TESTIGO_KEY);
    });
  }, []);

  // guardamos qué álbum se abrió
  const handleCardClick = (slug) => () => {
    sessionStorage.setItem(LAST_TESTIGO_KEY, slug);
  };

  return (
    <section>
      {/* <h1 className="page-title">testigo</h1> */}

      <ul className="work-grid">
        {testigo.map((c) => (
          <li
            key={c.slug}
            id={`testigo-${c.slug}`}         // 👈 ancla para scrollIntoView
            className="work-item"
          >
            <Link
              to={`/testigo/${c.slug}`}
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
