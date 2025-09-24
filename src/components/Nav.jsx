import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand">dabhya</Link>
      <nav>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/conciertos">conciertos</NavLink>
        <NavLink to="/retratos">retratos</NavLink>
        <NavLink to="/experimental">experimental</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </header>
  );
}
