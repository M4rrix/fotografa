import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand">dabhya</Link>
      <nav>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/conciertos">Conciertos</NavLink>
        <NavLink to="/retratos">Retratos</NavLink>
        <NavLink to="/experimental">Experimental</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
