// src/pages/Splash.jsx
import { Link } from "react-router-dom";

const slides = [
  "/src/assets/bg/bg1.webp", // o .jpg
  "/src/assets/bg/bg2.webp",
  "/src/assets/bg/bg3.webp",
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
