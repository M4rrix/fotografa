// src/pages/Splash.jsx
import { Link } from "react-router-dom";

const slides = [
  "/assets/portada/port1.jpg", // o .jpg
  "/assets/portada/port2.jpg",
  "/assets/portada/port3.jpg",
  "/assets/portada/port4.jpg"
];

export default function Splash() {
  return (
    <div className="splash" style={{
      backgroundImage: `url(${slides[0]})`, // fondo base visible al instante
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="slides">
        {slides.map((src, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 4}s` }}
            aria-hidden="true"
          />
        ))}
      </div>

      <Link to="/work" className="splash-brand">dabhya</Link>
    </div>
  );
}
