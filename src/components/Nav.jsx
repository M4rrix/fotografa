import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand">dabhya</Link>
      <nav>
        <NavLink to="/work" className="icon">✨</NavLink>
        <NavLink to="/sesiones"><strong>SESIONES</strong></NavLink>
        <NavLink to="/intimos"><strong>INTIMO</strong></NavLink>
        <NavLink to="/testigo"><strong>TESTIGO</strong></NavLink>
        <NavLink to="/experimental"><strong>35MM</strong></NavLink>
        <NavLink to="/contact" className="icon">🤍</NavLink> {/* */}
      </nav>
    </header>
  );
}
