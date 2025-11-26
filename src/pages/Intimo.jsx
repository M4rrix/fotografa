// src/pages/Intimo.jsx ANTES ESRA Retrato o Retratos
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { intimo } from "../data/intimo";
import GalleryMasonry from "../components/GalleryMasonry";
import Lightbox from "../components/Lightbox";
import "../styles/Lightbox.css";

export default function Intimo() {
  const { slug } = useParams();
  const c = intimo.find((x) => x.slug === slug);

  const [lbIndex, setLbIndex] = useState(null);

  if (!c) {
    return (
      <section className="page page--center">
        <h1 className="project-title">Sesión no encontrada</h1>
        <Link to="/intimo" className="btn btn--primary">
          ← Volver a intimo
        </Link>
      </section>
    );
  }

  const handleImageClick = (index) => {
    setLbIndex(index); // abre el lightbox en esa foto
  };

  const handleCloseLightbox = () => {
    setLbIndex(null); // cierra el lightbox
  };

  return (
    <article className="project is-gallery">
      <header className="project-header">
        <div className="project-header-meta">
         {/* <Link to="/intimo" className="back-link">
            ← Todas las intimo
          </Link> */} 
          <p className="muted">
            {c.city} · {c.year}
          </p>
        </div>
        <h1 className="project-title">{c.title}</h1>
        {c.description && (
          <p className="project-description">{c.description}</p>
        )}
      </header>

      <section className="project-gallery">
        <GalleryMasonry
          images={c.images}
          onImageClick={handleImageClick} // 👈 importante
        />
      </section>

      {/* No hace falta chequear hasLightboxOpen, tu Lightbox ya devuelve null si index es null */}
      <Lightbox
        images={c.images}
        index={lbIndex}
        setIndex={setLbIndex}
        onClose={handleCloseLightbox}
      />
    </article>
  );
}
