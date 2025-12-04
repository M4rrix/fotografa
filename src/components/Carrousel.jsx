// src/components/Carousel.jsx
import { useEffect, useId, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

export default function Carousel({ images = [], altBase = "Foto", fullscreen = false, fit = "contain" }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const galleryId = useId();

 

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    const slides = Array.from(root.children);
    const io = new IntersectionObserver((entries) => {
      const most = entries.reduce((a, b) => (b.intersectionRatio > a.intersectionRatio ? b : a));
      const i = slides.indexOf(most.target);
      if (i !== -1) setIndex(i);
    }, { root, threshold: 0.6 });
    slides.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [images.length]);

  useEffect(() => {
    if (!images?.length) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: `[data-pswp="${galleryId}"]`,
      children: "a",
      pswpModule: () => import("photoswipe"),
      wheelToZoom: true,
      showHideAnimationType: "fade",
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [galleryId, images]);

  return (
    <div className={`carousel ${fullscreen ? "fullscreen" : ""} ${fit === "cover" ? "fit-cover" : "fit-contain"}`} aria-label="Galería">
      <div className="carousel-track" ref={trackRef} tabIndex={0} data-pswp={galleryId}>
        {images.map((src, i) => (
          <figure className="carousel-slide" key={i}>
            <a href={src} data-pswp-width="1600" data-pswp-height="1000" rel="noreferrer">
              <img
                src={src}
                alt={`${altBase} ${i + 1}`}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${altBase}-${i}/1600/1000.webp`; }}
              />
            </a>
          </figure>
        ))}
      </div>

      {images.length > 1 && (
        <div className="carousel-ui">
          <button className="nav prev" onClick={prev} aria-label="Anterior">←</button>
          <div className="counter">{index + 1} / {images.length}</div>
          <button className="nav next" onClick={next} aria-label="Siguiente">→</button>
        </div>
      )}
    </div>
  );
}
