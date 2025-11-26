// src/pages/Work.jsx

import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    const site = document.querySelector(".site");
    if (!site) return;

    // Activa “modo Work” y setea la 1ª imagen (la que se ve detrás del nav)
    site.classList.add("is-work");
    site.style.setProperty("--work-bg", `url('/assets/inicio/1-pagina.jpg')`);

    return () => {
      site.classList.remove("is-work");
      site.style.removeProperty("--work-bg");
    };
  }, []);

  // Las otras imágenes, del mismo tamaño/formato que la primera
  const moreHeros = [
    "/assets/inicio/1-pagina.jpg",
    "/assets/inicio/2-pagina.jpg",
    "/assets/inicio/3-pagina.jpg",
    "/assets/inicio/4-pagina.jpg",
  ];

  return (
    <section className="work-landing" aria-label="Work backgrounds">
      {moreHeros.map((src, i) => (
        <div
          key={i}
          className="work-hero"
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </section>
  );
}

