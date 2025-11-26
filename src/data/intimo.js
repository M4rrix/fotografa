const BASE = "/assets/intimo";

/**
 * Genera un array de rutas de imagen usando numeración 01..N
 * @param {string} slug - nombre de la carpeta (p. ej. "niceto-2024")
 * @param {number} count - cantidad de fotos internas (p. ej. 50)
 * @param {string} ext - extensión ("webp" o "jpg")
 */
/** Genera /assets/intimo/<slug>/01.jpg ... */
function genImages(slug, count, ext = "jpg") {
  const pad = (n) => String(n).padStart(2, "0");
  return Array.from({ length: count }, (_, i) => `${BASE}/${slug}/${pad(i + 1)}.${ext}`);
}

export const intimo = [
  {
    slug: "1-un-espacio-para-soñar-tranquila",
    title: "Un espacio para soñar tranquila",
    city: "CABA",
    cover: `${BASE}/1-un-espacio-para-soñar-tranquila/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("1-un-espacio-para-soñar-tranquila", 26, "jpg"),
  },
   {
    slug: "2-cartografías-latinoamericanas",
    title: "Cartografías Latinoamericanas",
    city: "CABA",
    cover: `${BASE}/2-cartografías-latinoamericanas/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("2-cartografías-latinoamericanas", 18, "jpg"),
  },
  {
    slug: "3-atlantico-sur-2025",
    title: "Atlántico Sur",
    city: "CABA",
    cover: `${BASE}/3-atlantico-sur-2025/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("3-atlantico-sur-2025", 12, "jpg"),
  },
   {
    slug: "4-viaje-interior-l-20-21-22",
    title: "Viaje Interior",
    city: "CABA",
    cover: `${BASE}/4-viaje-interior-l-20-21-22/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-viaje-interior-l-20-21-22", 24, "jpg"),
  },
    {
    slug: "5-lejanamentecerca",
    title: "Lejanamentecerca",
    city: "CABA",
    cover: `${BASE}/5-lejanamentecerca/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("5-lejanamentecerca", 25, "jpg"),
  },
  {
    slug: "6-universo-corporal",
    title: "Universo Corporal",
    city: "CABA",
    cover: `${BASE}/6-universo-corporal/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("6-universo-corporal", 25, "jpg"),
  },
  {
    slug: "7-magma",
    title: "Magma",
    city: "CABA",
    cover: `${BASE}/7-magma/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("7-magma", 29, "jpg"),
  },
];
