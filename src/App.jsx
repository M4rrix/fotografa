import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Sesiones from "./pages/Sesiones";
import Sesion from "./pages/Sesion";
import Intimos from "./pages/Intimos";
import Intimo from "./pages/Intimo";
import Testigos from "./pages/Testigos";
import Testigo from "./pages/Testigo";
import Experimental from "./pages/Experimental";
import Contact from "./pages/Contact";
import Splash from "./pages/Splash";
import "./App.css";
import "photoswipe/style.css";
import "./styles/Splash.css";

/* ====== Redirects de compatibilidad (rutas viejas) ====== */
function LegacyConciertos() {
  return <Navigate to="/sesiones" replace />;
}
function LegacyConciertoDetalle() {
  const { slug } = useParams();
  return <Navigate to={`/sesiones/${slug}`} replace />;
}

function Layout() {
  const { pathname } = useLocation();
  const isSplash = pathname === "/";
  const isWork = pathname.startsWith("/work");


//BLOQUE PARA EL FONDO SI VOLVEMOS TODO ATRAS LO BORRO Y LISTO
const isGalleryPage =
    pathname.startsWith("/sesiones/") ||
    pathname.startsWith("/intimo/") ||
    pathname.startsWith("/testigo/") ||




    // 👇 BLOQUE NUEVO: desactivar menú botón derecho en todo el sitio
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  // ☝️ hasta acá

  return (
    <div className={`site ${isSplash ? "is-landing" : ""} ${isWork ? "is-work" : ""}`}>
      {!isSplash && <Nav />}
      <main className={isSplash ? "full" : ""}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />

          {/* Work */}
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />

          {/* Sesiones (nuevo) */}
          <Route path="/sesiones" element={<Sesiones />} />
          <Route path="/sesiones/:slug" element={<Sesion />} />

          {/* intimo */}
          <Route path="/intimos" element={<Intimos />} />
          <Route path="/intimo/:slug" element={<Intimo />} />

           {/* testigo */}
          <Route path="/testigo" element={<Testigos />} />
          <Route path="/testigo/:slug" element={<Testigo />} />

          {/* Otras secciones */}
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* {!isSplash && <Footer />} */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
