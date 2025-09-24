import { experimental } from "../data/experimental";
import "../styles/Experimental.css";

export default function Experimental() {
  return (
    <section className="experimental-page">
      {/* VERTICAL (arriba): centrada con aire */}
      <div className="exp-vertical">
        <img src={experimental.portrait} alt="Experimental — vertical" />
      </div>

      {/* HORIZONTAL (abajo): full-bleed */}
      <div className="exp-horizontal">
        <img src={experimental.landscape} alt="Experimental — horizontal" />
      </div>
    </section>
  );
}