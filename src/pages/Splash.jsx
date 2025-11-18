// src/pages/Splash.jsx
import { Link } from "react-router-dom";

const slides = [
  "/assets/portada/port1.jpg",
  "/assets/portada/port2.jpg",
  "/assets/portada/port3.jpg",
  "/assets/portada/port4.jpg",
];

const PER = 3;                                // 3 segundos por foto
const TOTAL = slides.length * PER;            // duración total del ciclo

export default function Splash() {
  return (
    <div
      className="splash"
      style={{
        backgroundImage: `url(${slides[0]})`, // fondo visible instantáneamente
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slides" style={{ ["--total"]: `${TOTAL}s` }}>
        {slides.map((src, i) => (
          <div
            key={i}
            className="slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * PER}s`,      // desfase de 3s por foto
              animationDuration: `var(--total)`,  // todo el ciclo
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <Link to="/work" className="splash-brand">dabhya</Link>
    </div>
  );
}


//QUE TODAS LAS IMAGENES DUREN 3 SEGUNDOS 👌

//HACER ZOOM A LAS FOTOS o sea el click

//CERRAR 28