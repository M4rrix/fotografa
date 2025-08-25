import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Splash from "./pages/Splash";
import "./App.css";
import "./styles/Splash.css"

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
          <Route path="/about" element={<About />} />
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
