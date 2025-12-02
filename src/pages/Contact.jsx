// src/pages/Contacto.jsx
import { useEffect } from "react";
import "../styles/Contacto.css";

const CONTACT_BG = "/assets/contacto.jpg"; // imagen

export default function Contacto() {
  useEffect(() => {
    const site = document.querySelector(".site");
    if (!site) return;

    site.classList.add("is-contact");

    return () => {
      site.classList.remove("is-contact");
    };
  }, []);

  return (
    <section
      className="contact-hero"
      aria-label="Contacto"
      style={{ backgroundImage: `url('${CONTACT_BG}')` }}
    />
  );
}
