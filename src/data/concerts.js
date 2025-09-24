const BASE = "/assets/conciertos";

/**
 * Genera un array de rutas de imagen usando numeración 01..N
 * @param {string} slug - nombre de la carpeta (p. ej. "niceto-2024")
 * @param {number} count - cantidad de fotos internas (p. ej. 50)
 * @param {string} ext - extensión ("webp" o "jpg")
 */
function genImages(slug, count, ext = "webp") {
  const pad = (n) => String(n).padStart(2, "0");
  return Array.from({ length: count }, (_, i) => `${BASE}/${slug}/${pad(i + 1)}.${ext}`);
}

export const concerts = [
  {
    slug: "david-guetta-2024",
    title: "David Guetta",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/david-guetta-2023/15.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("david-guetta-2023", 15, "jpg"),
  },
  {
    slug: "pancho-gana-2024",
    title: "Pancho Gana",
    year: 2024,
    city: "CABA",
    cover: `${BASE}/pancho-gana/01.jpg`,
    images: genImages("pancho-gana", 12, "jpg"),
  },
  {
    slug: "picnik",
    title: "Picnik Electronic",
    year: 2023,
    city: "CABA",
    cover: `${BASE}/picnik/01.jpg`,
    images: genImages("picnik", 3, "jpg"),
  },
  {
    slug: "manto-bruma",
    title: "Manto Bruma CCK",
    year: 2024,
    city: "CABA",
    cover: `${BASE}/manto-bruma/01.jpg`,
    images: genImages("manto-bruma", 10, "jpg"),
  },
  {
    slug: "regreso-bllie",
    title: "El Regreso de Billie",
    year: 2024,
    city: "CABA",
    cover: `${BASE}/regreso-bllie/01.jpg`,
    images: genImages("regreso-bllie", 5, "jpg"),
  },
  {
    slug: "vapor-palacio",
    title: "Vapor Palacio de las Aguas",
    year: 2024,
    city: "La Plata",
    cover: `${BASE}/vapor-palacio/01.jpg`,
    images: genImages("vapor-palacio", 16, "jpg"),
  },
  {
    slug: "juntada-andy",
    title: "Juntada Andy Pomato",
    year: 2024,
    city: "CABA",
    cover: `${BASE}/juntada-andy/01.jpg`,
    images: genImages("juntada-andy", 4, "jpg"),
  },
  {
    slug: "emergente-2022",
    title: "Juana Aguirre Cambiar formato fotos",
    year: 2022,
    city: "CABA",
    cover: `${BASE}/emergente-2022/cover.webp`,
    images: genImages("emergente-2022", 28, "webp"),
  },
];
