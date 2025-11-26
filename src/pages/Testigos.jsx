// src/pages/Testigos.jsx
import { Link } from "react-router-dom";
import { testigo } from "../data/testigo";

export default function Testigos() {
  return (
    <section>
    {/*<h1 className="page-title">testigo</h1> */} 

      <ul className="work-grid">
        {testigo.map((c) => (
          <li key={c.slug} className="work-item">
            <Link to={`/testigo/${c.slug}`} className="card">
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
