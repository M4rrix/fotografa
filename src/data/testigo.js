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
    cover: `${BASE}/01-adidas-rosedal/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("01-adidas-rosedal", 22, "jpg"),
  },
    {
    slug: "1-fotofija-chela",
    title: "Fotofija Chela",
    cover: `${BASE}/1-fotofija-chela/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("1-fotofija-chela", 44, "jpg"),
  },
    {
    slug: "2-fotofija-tinydesk-mariana-baggio",
    title: "Fotofija Tinydesk Mariana Baggio",
    cover: `${BASE}/2-fotofija-tinydesk-mariana-baggio/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("2-fotofija-tinydesk-mariana-baggio", 33, "jpg"),
  },
  {
    slug: "2-manto-bruma-cck",
    title: "Manto Bruma CCK",
    cover: `${BASE}/2-manto-bruma-cck/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("2-manto-bruma-cck", 22, "jpg"),
  },
   {
    slug: "3-silvestre-san-jose",
    title: "Silvestre San Jose",
    cover: `${BASE}/3-silvestre-san-jose/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("3-silvestre-san-jose", 22, "jpg"),
  },
  {
    slug: "4-alunecer",
    title: "Alunecer",
    cover: `${BASE}/4-alunecer/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-alunecer", 19, "jpg"),
  },
   {
    slug: "4-vapor-palacio-de-las-aguas",
    title: "Vapor palacio de las aguas",
    cover: `${BASE}/4-vapor-palacio-de-las-aguas/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-vapor-palacio-de-las-aguas", 35, "jpg"),
  },
  {
    slug: "5-juntada-andy-pomato",
    title: "Juntada Andy Pomato",
    cover: `${BASE}/5-juntada-andy-pomato/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("5-juntada-andy-pomato", 16, "jpg"),
  },
   {
    slug: "6-fotofija-la-hipocrecia-mato-al-gato",
    title: "Fotofija la hipocrecia mato al gato",
    cover: `${BASE}/6-fotofija-la-hipocrecia-mato-al-gato/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("6-fotofija-la-hipocrecia-mato-al-gato", 28, "jpg"),
  },
  {
    slug: "7-pancho-gana",
    title: "Pancho Gana",
    cover: `${BASE}/7-pancho-gana/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("7-pancho-gana", 12, "jpg"),
  },
  {
    slug: "8-soy-tu-rita-casa-brandon",
    title: "Soy tu Rita Casa Brandon",
    cover: `${BASE}/8-soy-tu-rita-casa-brandon/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("8-soy-tu-rita-casa-brandon", 18, "jpg"),
  },
  {
    slug: "9-david-guetta",
    title: "David Guetta",
    cover: `${BASE}/9-david-guetta/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("9-david-guetta", 17, "jpg"),
  },
     {
    slug: "23-piknic-electronik-scl",
    title: "Piknic électronik scl",
    cover: `${BASE}/23-piknic-electronik-scl/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("23-piknic-electronik-scl", 13, "jpg"),
  },
    
   
];
