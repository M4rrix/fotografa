// src/pages/Experimental.jsx


import { useState } from "react";
import { experimental } from "../data/experimental";
import GalleryMasonry from "../components/GalleryMasonry";
import Lightbox from "../components/Lightbox";
import "../styles/Lightbox.css";

export default function Experimental() {
  const [lbIndex, setLbIndex] = useState(null);

  const handleImageClick = (index) => {
    setLbIndex(index); // abre el lightbox en esa foto
  };

  const handleCloseLightbox = () => {
    setLbIndex(null); // cierra el lightbox
  };

  const c = experimental; // para mantener el mismo patrón que Intimo.jsx

  return (
    <article className="project is-gallery">
      <header className="project-header">
        <div className="project-header-meta">
          {/* Si querés un link de vuelta a “trabajos”, podés meterlo acá */}
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
          altBase="Foto 35mm"
          onImageClick={handleImageClick}
        />
      </section>

      <Lightbox
        images={c.images}
        index={lbIndex}
        setIndex={setLbIndex}
        onClose={handleCloseLightbox}
      />
    </article>
  );
}





