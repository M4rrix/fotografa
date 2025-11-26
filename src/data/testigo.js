const BASE = "/assets/testigo";

/**
 * Genera un array de rutas de imagen usando numeración 01..N
 * @param {string} slug - nombre de la carpeta (p. ej. "niceto-2024")
 * @param {number} count - cantidad de fotos internas (p. ej. 50)
 * @param {string} ext - extensión ("webp" o "jpg")
 */
/** Genera /assets/testigo/<slug>/01.jpg ... */
function genImages(slug, count, ext = "jpg") {
  const pad = (n) => String(n).padStart(2, "0");
  return Array.from({ length: count }, (_, i) => `${BASE}/${slug}/${pad(i + 1)}.${ext}`);
}

export const testigo = [
  {
    slug: "01-adidas-rosedal",
    title: "Adidas en Rosedal",
    city: "CABA",
    cover: `${BASE}/01-adidas-rosedal/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("01-adidas-rosedal", 22, "jpg"),
  },
    {
    slug: "1-fotofija-chela",
    title: "Fotofija Chela",
    city: "CABA",
    cover: `${BASE}/1-fotofija-chela/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("1-fotofija-chela", 44, "jpg"),
  },
   {
    slug: "2-manto-bruma-cck",
    title: "Manto Bruma CCK",
    city: "CABA",
    cover: `${BASE}/2-manto-bruma-cck/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("2-manto-bruma-cck", 22, "jpg"),
  },
   {
    slug: "3-silvestre-san-jose",
    title: "Silvestre San Jose",
    city: "CABA",
    cover: `${BASE}/3-silvestre-san-jose/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("3-silvestre-san-jose", 22, "jpg"),
  },
  {
    slug: "4-alunecer",
    title: "Alunecer",
    city: "CABA",
    cover: `${BASE}/4-alunecer/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-alunecer", 19, "jpg"),
  },
   {
    slug: "4-vapor-palacio-de-las-aguas",
    title: "Vapor palacio de las aguas",
    city: "CABA",
    cover: `${BASE}/4-vapor-palacio-de-las-aguas/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-vapor-palacio-de-las-aguas", 35, "jpg"),
  },
  {
    slug: "5-juntada-andy-pomato",
    title: "Juntada Andy Pomato",
    city: "CABA",
    cover: `${BASE}/5-juntada-andy-pomato/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("5-juntada-andy-pomato", 16, "jpg"),
  },
   {
    slug: "6-fotofija-la-hipocrecia-mato-al-gato",
    title: "Fotofija la hipocrecia mato al gato",
    city: "CABA",
    cover: `${BASE}/6-fotofija-la-hipocrecia-mato-al-gato/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("6-fotofija-la-hipocrecia-mato-al-gato", 13, "jpg"),
  },
  {
    slug: "7-pancho-gana",
    title: "Pancho Gana",
    city: "CABA",
    cover: `${BASE}/7-pancho-gana/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("7-pancho-gana", 12, "jpg"),
  },
  {
    slug: "8-soy-tu-rita-casa-brandon",
    title: "Soy ty Rita Casa Brandon",
    city: "CABA",
    cover: `${BASE}/8-soy-tu-rita-casa-brandon/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("8-soy-tu-rita-casa-brandon", 6, "jpg"),
  },
  {
    slug: "9-david-guetta",
    title: "David Guetta",
    city: "CABA",
    cover: `${BASE}/9-david-guetta/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("9-david-guetta", 15, "jpg"),
  },
     {
    slug: "10-piknic",
    title: "Piknic",
    city: "CABA",
    cover: `${BASE}/10-piknic/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("10-piknic", 3, "jpg"),
  },
      {
    slug: "study",
    title: "Study",
    city: "CABA",
    cover: `${BASE}/study/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("study", 6, "jpg"),
  },
   
];
