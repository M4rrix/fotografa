import { Link } from "react-router-dom";
import { retrato } from "../data/retrato";


export default function Retratos() {
  return (
    <section>
      <h1 className="page-title">Retratos</h1>
      <ul className="work-grid">
        {retrato.map((p) => (
          <li key={p.slug} className="work-item">
            <Link to={`/retratos/${p.slug}`} className="card">
              <div className="ratio">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  width="1600"
                  height="1000"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${p.slug}/1600/1000.jpg`;
                  }}
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
