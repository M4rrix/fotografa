import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Conciertos from "./pages/Conciertos";
import Concierto from "./pages/Concierto";
import Retratos from "./pages/Retratos";
import RetratoProyecto from "./pages/RetratoProyecto"
import Experimental from "./pages/Experimental";
import Contact from "./pages/Contact";
import Splash from "./pages/Splash";
import "./App.css";
import 'photoswipe/style.css';
import "./styles/Splash.css";

function Layout() {
  const { pathname } = useLocation();
  const isSplash = pathname === "/";
  const isWork = pathname === "/work"; 
  // si quiero que también aparezca en /work/:slug, usá:
  // const isWork = pathname.startsWith("/work");

  return (
    <div className={`site ${isSplash ? "is-landing" : ""} ${isWork ? "is-work" : ""}`}>
      {!isSplash && <Nav />}
      <main className={isSplash ? "full" : ""}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />    {/* tu Home actual si lo querés conservar */}
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/conciertos" element={<Conciertos />} />
          <Route path="/conciertos/:slug" element={<Concierto />} />
          <Route path="/retratos" element={<Retratos />} />
          <Route path="/retratos/:slug" element={<RetratoProyecto />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isSplash && <Footer />}
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
