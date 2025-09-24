import { useParams, Link } from "react-router-dom";
import { concerts } from "../data/concerts";
import Carousel from "../components/Carrousel"; 

export default function Concierto() {
  const { slug } = useParams();
  const c = concerts.find(x => x.slug === slug);

  if (!c) {
    return (
      <section>
        <h1>Concierto no encontrado</h1>
        <p className="muted">Revisá el enlace o volvé al listado.</p>
        <Link to="/conciertos" className="btn">← Volver a Conciertos</Link>
      </section>
    );
  }

  return (
    <article className="project">
      <aside className="project-aside">
        <h1>{c.title}</h1>
        <p className="muted">{c.city} · {c.year}</p>
      </aside>

      <div className="project-body">
        {/* fullscreen: alto de viewport; fit="contain": que entre completa sin recorte */}
        <Carousel images={c.images} altBase={c.title} fullscreen fit="contain" />
        <nav className="project-nav">
          <Link to="/conciertos" className="btn">← Volver</Link>
        </nav>
      </div>
    </article>
  );
}
