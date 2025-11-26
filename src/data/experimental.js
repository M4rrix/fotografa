
// src/data/experimental.js  

const BASE = "/assets/35mm";

// helper para 01, 02, 03...
const pad = (n) => String(n).padStart(2, "0");

// genera /assets/35mm/01.jpg ... /assets/35mm/40.jpg
const images35mm = Array.from(
  { length: 41 }, // 👉 cantidad de fotos
  (_, i) => `${BASE}/${pad(i + 1)}.jpg`
);

export const experimental = {
  title: "35MM",       // idem
  description: "Serie en película 35mm.",
  images: images35mm,
};


