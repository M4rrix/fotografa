// src/pages/Splash.jsx
import { Link, useNavigate } from "react-router-dom";

const slides = [
  "/assets/portada/port1.jpg",
  "/assets/portada/port2.jpg",
  "/assets/portada/port3.jpg",
  "/assets/portada/port4.jpg",
];

const PER = 3;                     // 3 segundos por foto
const TOTAL = slides.length * PER; // duración total del ciclo

export default function Splash() {
  const navigate = useNavigate();

  const handleEnter = () => {
    // aca pongo para clickear y que lleve al inicio
    navigate("/work"); // aca pongo la ruta que quiero que aterrice
  };

  return (
    <div
      className="splash"
      onClick={handleEnter} // click en cualquier parte parar entrar
      style={{
        backgroundImage: `url(${slides[0]})`,
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
              animationDelay: `${i * PER}s`,
              animationDuration: `var(--total)`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* el link sigue funcionando, pero no dispara el click del fondo */}
      <Link
        to="/work"
        className="splash-brand"
        onClick={(e) => e.stopPropagation()} // para que no corra handleEnter dos veces
      >
        dabhya
      </Link>
    </div>
  );
}
