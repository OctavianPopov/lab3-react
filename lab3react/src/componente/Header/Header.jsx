import { useState } from "react";
import stil from "./Header.module.css";

function Header({ onNavigate }) {
  const [deschis, setDeschis] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setDeschis(false);
  };

  return (
    <header className={stil.header}>
      <div className={stil.overlay}>

        <div className={stil.left}>
          <div className={stil.logo}>BEEF HOUSE</div>
        </div>

        <div className={stil.center}>
          <div className={stil.textBox}>
            <h1 className={stil.titlu}>BEEF HOUSE</h1>
          </div>
        </div>

        <div className={stil.right}>
          <button
            className={stil.menuButton}
            onClick={() => setDeschis(!deschis)}
          >
            ☰
          </button>
        </div>

        {deschis && (
          <div className={stil.drawer}>
            <button onClick={() => scrollTo("meniuri")}>🍔 Meniuri</button>
            <button onClick={() => scrollTo("snacks")}>🍟 Snacks</button>
            <button onClick={() => scrollTo("bauturi")}>🥤 Bauturi</button>

            <hr />

            <button onClick={() => onNavigate("cos")}>🛒 Cart</button>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;