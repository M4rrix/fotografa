// src/pages/Intimos.jsx
import { Link } from "react-router-dom";
import { intimo } from "../data/intimo";

export default function Intimos() {
  return (
    <section>
    {/* <h1 className="page-title">intimo</h1>*/}  

      <ul className="work-grid">
        {intimo.map((c) => (
          <li key={c.slug} className="work-item">
            <Link to={`/intimo/${c.slug}`} className="card">
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
