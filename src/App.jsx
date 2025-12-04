// src/App.jsx
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
import { useEffect, useRef } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
  const isContact = pathname === "/contact";

  // guardamos la posición de scroll por ruta
  const scrollPositions = useRef({});

  // desactivar menú botón derecho en todo el sitio
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // recordar la posición de scroll por ruta
  useEffect(() => {
    const saved = scrollPositions.current[pathname];

    if (typeof saved === "number") {
      window.scrollTo(0, saved);
    } else {
      window.scrollTo(0, 0); // primera vez en esta ruta
    }

    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

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

          {/* Sesiones */}
          <Route path="/sesiones" element={<Sesiones />} />
          <Route path="/sesiones/:slug" element={<Sesion />} />

          {/* Íntimo */}
          <Route path="/intimos" element={<Intimos />} />
          <Route path="/intimo/:slug" element={<Intimo />} />

          {/* Testigo */}
          <Route path="/testigo" element={<Testigos />} />
          <Route path="/testigo/:slug" element={<Testigo />} />

          {/* Otras secciones */}
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/contact" element={<Contact />} />

          {/* Rutas viejas */}
          <Route path="/conciertos" element={<LegacyConciertos />} />
          <Route path="/conciertos/:slug" element={<LegacyConciertoDetalle />} />
        </Routes>
      </main>

      {/* si querés que Contact no tenga scroll ni footer, dejalo así */}
      {!isSplash && !isContact && <Footer />}
      {/* si preferís footer también en Contact, cambiá por:
          {!isSplash && <Footer />} */}
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
