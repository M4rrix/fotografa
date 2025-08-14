import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Home() {
  const highlights = projects.slice(0, 6); // muestra las primeras 6

  return (
    <section className="home">
      <motion.h1 initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:.6}} className="hero-title">
        Fotografía editorial <span className="thin">minimalista</span>
      </motion.h1>

      <p className="hero-sub">Moda, retrato y campañas.</p>
      <Link to="/work" className="btn">Ver trabajos</Link>

      <div className="grid">
        {highlights.map(p => (
          <Link key={p.slug} to={`/work/${p.slug}`} className="card">
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              width="1600"
              height="1000"
              onError={(e)=>{ e.currentTarget.src=`https://picsum.photos/seed/${p.slug}/1600/1000.webp`; }}
            />
            <div className="card-caption">{p.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
