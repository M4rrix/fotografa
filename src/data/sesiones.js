//ESTO SERIA SESIONES

const BASE = "/assets/sesiones";

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

export const sesiones = [
  {
    slug: "1-malagueta",
    title: "Malagueta",
    city: "CABA",
    cover: `${BASE}/1-malagueta/00.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("1-malagueta", 14, "jpg"),
  },
   {
    slug: "2-ursula-pomelo",
    title: "Ursula Pomelo",
    
    city: "CABA",
    cover: `${BASE}/2-ursula-pomelo/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("2-ursula-pomelo", 33, "jpg"),
  },
   {
    slug: "3-rayokuza",
    title: "Rayokuza",
    
    city: "CABA",
    cover: `${BASE}/3-rayokuza/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("3-rayokuza", 26, "jpg"),
  },
  {
    slug: "4-cielo-diaz",
    title: "Cielo Diaz",
    
    city: "CABA",
    cover: `${BASE}/4-cielo-diaz/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("4-cielo-diaz", 12, "jpg"),
  },
    {
    slug: "5-nahuel-souto",
    title: "Nahuel Souto",
    
    city: "CABA",
    cover: `${BASE}/5-nahuel-souto/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("5-nahuel-souto", 13, "jpg"),
  },
  {
    slug: "6-esenarie",
    title: "Esenarie",
    
    city: "CABA",
    cover: `${BASE}/6-esenarie/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("6-esenarie", 36, "jpg"),
  },
  {
    slug: "7-tripolosky",
    title: "Tripolosky",
    
    city: "CABA",
    cover: `${BASE}/7-tripolosky/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("7-tripolosky", 27, "jpg"),
  },
   {
    slug: "8-serena",
    title: "Serena",
    
    city: "CABA",
    cover: `${BASE}/8-serena/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("8-serena", 15, "jpg"),
  },
  {
    slug: "9-jose-masajnik",
    title: "Jose Masajnik",
    
    city: "CABA",
    cover: `${BASE}/9-jose-masajnik/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("9-jose-masajnik", 29, "jpg"),
  },
   {
    slug: "10-linda",
    title: "Linda",
    
    city: "CABA",
    cover: `${BASE}/10-linda/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("10-linda", 25, "jpg"),
  },
   {
    slug: "11-dai",
    title: "Dai",
    
    city: "CABA",
    cover: `${BASE}/11-dai/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("11-dai", 11, "jpg"),
  },
     {
    slug: "12-sofia-aristimuno",
    title: "Sofia Aristimuño",
    
    city: "CABA",
    cover: `${BASE}/12-sofia-aristimuno/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("12-sofia-aristimuno", 12, "jpg"),
  },
      {
    slug: "13-clara",
    title: "Clara",
    
    city: "CABA",
    cover: `${BASE}/13-clara/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("13-clara", 11, "jpg"),
  },
       {
    slug: "14-lucas",
    title: "Lucas",
    
    city: "CABA",
    cover: `${BASE}/14-lucas/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("14-lucas", 11, "jpg"),
  },
       {
    slug: "15-delfinmal-hellocrudo",
    title: "Delfinmal Hellocrudo",
    
    city: "CABA",
    cover: `${BASE}/15-delfinmal-hellocrudo/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("15-delfinmal-hellocrudo", 10, "jpg"),
  },
      {
    slug: "15-matt",
    title: "Matt",
    
    city: "CABA",
    cover: `${BASE}/15-matt/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("15-matt", 16, "jpg"),
  },
      {
    slug: "16-duomelis",
    title: "Duomelis",
    
    city: "CABA",
    cover: `${BASE}/16-duomelis/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("16-duomelis", 18, "jpg"),
  },
        {
    slug: "17-ceci-sierra",
    title: "Ceci Sierra",
    
    city: "CABA",
    cover: `${BASE}/17-ceci-sierra/0.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("17-ceci-sierra", 10, "jpg"),
  },
         {
    slug: "18-infotrabajo",
    title: "Infotrabajo",
    
    city: "CABA",
    cover: `${BASE}/18-infotrabajo/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("18-infotrabajo", 15, "jpg"),
  },
           {
    slug: "19-vey",
    title: "Vey",
    
    city: "CABA",
    cover: `${BASE}/19-vey/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("19-vey", 18, "jpg"),
  },
            {
    slug: "20-zaguataes",
    title: "Zaguates",
    
    city: "CABA",
    cover: `${BASE}/20-zaguates/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("20-zaguates", 19, "jpg"),
  },
           {
    slug: "21-le-morte",
    title: "Le Morte",
    
    city: "CABA",
    cover: `${BASE}/21-le-morte/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("21-le-morte", 7, "jpg"),
  },
            {
    slug: "22-planeta-azul",
    title: "Planeta Azul",
    
    city: "CABA",
    cover: `${BASE}/22-planeta-azul/01.jpg`,   // usa cover.jpg (o duplica 01.jpg con ese nombre)
    images: genImages("22-planeta-azul", 3, "jpg"),
  },
 
];
