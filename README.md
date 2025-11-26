CAMBIOS ESTETICOS EN EL FONDO:
En App.jsx agregue el bloque:
const isGalleryPage =
    pathname.startsWith("/sesiones/") ||
    pathname.startsWith("/intimo/") ||
    pathname.startsWith("/testigo/") ||
    
Si volvemos para atras con solo el fondo blanco, lo borro y listo. 

En App.css agregue desde la linea 44 a la 86 todo el nuevo bloque para el diseño del fondo y tambien en el bloque 
26 cambie el background:
* { box-sizing: border-box; }
html, body, #root { height: 100%; }
body {
  background:
   radial-gradient(circle at top, #101018 0, #050509 55%, #020203 100%);
  color: #f5f5f5;
  /*background: var(--bg); 
  color: var(--fg);   --> FONDO ANTERIOR PARA QUE SEA BLANCO*/
} 

Lo que pienso tambien es que puede quedar copado tambien, con el fondo en blanco. Hay que ir probando.
