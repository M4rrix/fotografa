import { useParams, Link } from "react-router-dom";
import { retrato } from "../data/retrato";
import GalleryMasonry from "../components/GalleryMasonry"; // tu componente de grilla

export default function Concierto() {
  const { slug } = useParams();
  const c = retrato.find(x => x.slug === slug);

  if (!c) {
    return (
      <section>
        <h1>Concierto no encontrado</h1>
        <p className="muted">Revisá el enlace o volvé al listado.</p>
        <Link to="/retratos" className="btn">← Volver a Conciertos</Link>
      </section>
    );
  }

  return (
    <article className="project is-gallery">
      {/* Encabezado arriba y centrado */}
          <header className="project-header">
            <h1 className="project-title">{c.title}</h1>
            <p className="muted">{c.city} · {c.year}</p>
          </header>


     
        {/* fullscreen: alto de viewport; fit="contain": que entre completa sin recorte */}
        <GalleryMasonry images={c.images} altBase={c.title} />
        <nav className="project-nav">
          <Link to="/retratos" className="btn">← Volver</Link>
        </nav>
     
    </article>
  );
}
