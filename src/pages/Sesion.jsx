import { useParams, Link } from "react-router-dom";
import { sesiones } from "../data/sesiones";
import GalleryMasonry from "../components/GalleryMasonry"; // tu componente de grilla

export default function Concierto() {
  const { slug } = useParams();
  const c = sesiones.find(x => x.slug === slug);

  if (!c) {
    return (
      <section>
        <h1>Concierto no encontrado</h1>
        <p className="muted">Revisá el enlace o volvé al listado.</p>
        <Link to="/sesiones" className="btn">← Volver a Conciertos</Link>
      </section>
    );
  }

  return (


    <article className="project is-gallery">
          {/*<div className="gallery-header">
            <h1>{c.title}</h1>
                  <p className="muted">{c.city} · {c.year}</p>
            </div> */} 
<div className="project-body">
  {/* Encabezado arriba y centrado*/}
  <header className="project-header">
    <h1 className="project-title">{c.title}</h1>
    <p className="muted">{c.city} · {c.year}</p>
  </header>

  <GalleryMasonry images={c.images} altBase={c.title} />

  <nav className="project-nav">
    <Link to="/sesiones" className="btn">← Volver</Link>
  </nav>
</div>
      
      </article>
);
}
