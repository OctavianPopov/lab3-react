import stil from "./Navbar.module.css";

function Navbar({ navigheaza }) {
  return (
    <div className={stil.navbar}>
      <button onClick={() => navigheaza("profil")}>👤</button>
      <button onClick={() => navigheaza("home")}>🏠</button>
      <button onClick={() => navigheaza("cos")}>🛒</button>
    </div>
  );
}

export default Navbar;