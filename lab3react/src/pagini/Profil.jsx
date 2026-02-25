import { useEffect, useState } from "react";
import stil from "./Profil.module.css";

function Profil() {
  const [istoric, setIstoric] = useState([]);

  useEffect(() => {
    const date = localStorage.getItem("istoric");

    if (!date) {
      setIstoric([]);
      return;
    }

    try {
      const parsed = JSON.parse(date);

      if (Array.isArray(parsed)) {
        setIstoric(parsed);
      } else {
        setIstoric([]);
      }
    } catch {
      setIstoric([]);
    }
  }, []);

  const meniuri = istoric.filter(p => p.categorie === "meniuri").length;
  const snacks = istoric.filter(p => p.categorie === "snacks").length;
  const bauturi = istoric.filter(p => p.categorie === "bauturi").length;

  return (
    <div className={stil.container}>
      <h1 className={stil.titlu}>Profil</h1>

      <div className={stil.card}>
        <p>Meniuri cumparate: <strong>{meniuri}</strong></p>
        <p>Snacks cumparate: <strong>{snacks}</strong></p>
        <p>Bauturi cumparate: <strong>{bauturi}</strong></p>
      </div>
    </div>
  );
}

export default Profil;