import { useState, useEffect } from "react";
import stil from "./Cos.module.css";

function Cos() {
  const [cos, setCos] = useState([]);

  useEffect(() => {
    const date = localStorage.getItem("cos");

    if (!date) {
      setCos([]);
      return;
    }

    try {
      const parsed = JSON.parse(date);

      if (Array.isArray(parsed)) {
        setCos(parsed);
      } else {
        setCos([]);
      }
    } catch {
      setCos([]);
    }
  }, []);

  // ștergere produs
  const stergeProdus = (index) => {
    const nouCos = [...cos];
    nouCos.splice(index, 1);

    setCos(nouCos);
    localStorage.setItem("cos", JSON.stringify(nouCos));
  };

  // comandă
  const comanda = () => {
  alert("Comanda plasata! 🎉");

  // istoric cumparaturi
  const istoric = JSON.parse(localStorage.getItem("istoric")) || [];
  const cosActual = JSON.parse(localStorage.getItem("cos")) || [];

  // adaugam produsele cumparate in istoric
  const nouIstoric = [...istoric, ...cosActual];
  localStorage.setItem("istoric", JSON.stringify(nouIstoric));

  // golim cosul
  localStorage.removeItem("cos");
  setCos([]);
};

  // total sumă
  const total = cos.reduce((sum, produs) => sum + Number(produs.pret || 0), 0);

  return (
    <div className={stil.container}>

      <h1 className={stil.titlu}>Cos</h1>

      {cos.length === 0 && (
        <p className={stil.empty}>
          Cosul este gol.
        </p>
      )}

      <div>
        {cos.map((produs, index) => (
          <div key={index} className={stil.card}>

            <div>
              <h3>{produs.titlu}</h3>
              <p>{produs.descriere}</p>
              <strong>{produs.pret} lei</strong>
            </div>

            <button
              className={stil.sterge}
              onClick={() => stergeProdus(index)}
            >
              ✖
            </button>

          </div>
        ))}
      </div>

      {cos.length > 0 && (
        <>
          <div className={stil.total}>
            Total: {total} lei
          </div>

          <button className={stil.buton} onClick={comanda}>
            Comanda acum ✅
          </button>
        </>
      )}

    </div>
  );
}

export default Cos;