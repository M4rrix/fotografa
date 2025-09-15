import { useEffect, useRef, useState } from "react";

export default function Carousel({ images = [], altBase = "Foto" }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i) => {
    const t = trackRef.current;
    const slide = t?.children?.[i];
    if (slide) slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };
  const prev = () => scrollTo(Math.max(index - 1, 0));
  const next = () => scrollTo(Math.min(index + 1, images.length - 1));

  // Calcula el índice visible con IntersectionObserver
  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;
    const slides = Array.from(root.children);
    const io = new IntersectionObserver(
      (entries) => {
        const most = entries.reduce((a, b) => (b.intersectionRatio > a.intersectionRatio ? b : a));
        const i = slides.indexOf(most.target);
        if (i !== -1) setIndex(i);
      },
      { root, threshold: 0.6 }
    );
    slides.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [images.length]);

  // (Opcional) autoplay cada 4s — descomentar si lo querés
  // useEffect(() => {
  //   if (images.length <= 1) return;
  //   const id = setInterval(() => {
  //     setIndex((i) => {
  //       const nextI = (i + 1) % images.length;
  //       scrollTo(nextI);
  //       return nextI;
  //     });
  //   }, 4000);
  //   return () => clearInterval(id);
  // }, [images.length]);

  return (
    <div className="carousel" aria-label="Galería">
      <div className="carousel-track" ref={trackRef} tabIndex={0}>
        {images.map((src, i) => (
          <figure className="carousel-slide" key={i}>
            <img
              src={src}
              alt={`${altBase} ${i + 1}`}
              loading="lazy"
              decoding="async"
              onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${altBase}-${i}/1600/1000.webp`; }}
            />
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
