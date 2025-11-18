import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Sesiones from "./pages/Sesiones";
import Sesion from "./pages/Sesion";
import Retratos from "./pages/Retratos";
import RetratoProyecto from "./pages/RetratoProyecto";
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

          {/* Redirects legacy */}
          <Route path="/conciertos" element={<LegacyConciertos />} />
          <Route path="/conciertos/:slug" element={<LegacyConciertoDetalle />} />

          {/* Otras secciones */}
          <Route path="/retratos" element={<Retratos />} />
          <Route path="/retratos/:slug" element={<RetratoProyecto />} />
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
