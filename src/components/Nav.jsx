import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand">dabhya</Link>
      <nav>
        <NavLink to="/work">inicio</NavLink>
        <NavLink to="/sesiones">sesiones</NavLink>
        <NavLink to="/retratos">intimo</NavLink>
        <NavLink to="/testigo">testigo</NavLink>
        <NavLink to="/experimental">exploraciones</NavLink>
        <NavLink to="/contact">contacto</NavLink>
      </nav>
    </header>
  );
}
