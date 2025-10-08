const BASE = "/assets/retrato";

/**
 * Genera un array de rutas de imagen usando numeración 01..N
 * @param {string} slug - nombre de la carpeta (p. ej. "niceto-2024")
 * @param {number} count - cantidad de fotos internas (p. ej. 50)
 * @param {string} ext - extensión ("webp" o "jpg")
 */
/** Genera /assets/retrato/<slug>/01.jpg ... */
function genImages(slug, count, ext = "jpg") {
  const pad = (n) => String(n).padStart(2, "0");
  return Array.from({ length: count }, (_, i) => `${BASE}/${slug}/${pad(i + 1)}.${ext}`);
}

export const retrato = [
  {
    slug: "cecisierra",
    title: "Ceci Sierra",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/cecisierra/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("cecisierra", 8, "jpg"),
  },
  {
    slug: "cielo",
    title: "Cielo",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/cielo/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("cielo", 20, "jpg"),
  },
   {
    slug: "clara",
    title: "Clara",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/clara/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("clara", 8, "jpg"),
  },
   {
    slug: "delfin",
    title: "Delfin",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/delfin/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("delfin", 5, "jpg"),
  },
 {
    slug: "duomelis",
    title: "Duomelis",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/duomelis/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("duomelis", 6, "jpg"),
  },
   {
    slug: "ernestina",
    title: "Ernestina",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/ernestina/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("ernestina", 3, "jpg"),
  },
   {
    slug: "francisco",
    title: "Francisco",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/francisco/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("francisco", 12, "jpg"),
  },
   {
    slug: "linda",
    title: "Linda",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/linda/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("linda", 14, "jpg"),
  },
   {
    slug: "lourdes",
    title: "Lourdes",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/lourdes/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("lourdes", 14, "jpg"),
  },
   {
    slug: "lucas",
    title: "Lucas",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/lucas/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("lucas", 11, "jpg"),
  },
   {
    slug: "matt",
    title: "Matt",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/matt/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("matt", 16, "jpg"),
  },
   {
    slug: "nahuel",
    title: "Nahuel",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/nahuel/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("nahuel", 13, "jpg"),
  },
   {
    slug: "rociovalenzetti",
    title: "Rocio Valenzetti",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/rociovalenzetti/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("rociovalenzetti", 7, "jpg"),
  },
   {
    slug: "serena",
    title: "Serena",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/serena/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("serena", 6, "jpg"),
  },
   {
    slug: "sofia",
    title: "Sofia",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/sofia/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("sofia", 4, "jpg"),
  },
   {
    slug: "stephanie",
    title: "Stephanie",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/stephanie/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("stephanie", 11, "jpg"),
  },
   {
    slug: "vey",
    title: "Vey",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/vey/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("vey", 11, "jpg"),
  },
];
