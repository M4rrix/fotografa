// src/components/Lightbox.jsx
import { useEffect } from "react";

export default function Lightbox({ images = [], index, setIndex, onClose }) {
  const isOpen = index !== null && index !== undefined;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    // bloquear scroll del body
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, images.length, onClose, setIndex]);

  if (!isOpen) return null;

  const src = images[index];

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-close" aria-label="Cerrar" onClick={onClose}>×</button>

      {images.length > 1 && (
        <>
          <button
            className="lb-nav lb-prev"
            aria-label="Anterior"
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
          >‹</button>
          <button
            className="lb-nav lb-next"
            aria-label="Siguiente"
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
          >›</button>
        </>
      )}

      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" className="lb-img" />
        <figcaption className="lb-cap">{index + 1} / {images.length}</figcaption>
      </figure>
    </div>
  );
}
