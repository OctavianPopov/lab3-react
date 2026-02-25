import stil from "./CardMeniu.module.css";

function CardMeniu({ titlu, descriere, pret, imagine, categorie }) {

  const adaugaInCos = () => {
    const cos = JSON.parse(localStorage.getItem("cos")) || [];

    const produs = {
      titlu,
      descriere,
      pret,
      imagine,
      categorie
    };

    cos.push(produs);

    localStorage.setItem("cos", JSON.stringify(cos));

    alert("Adaugat in cos ✅");
  };

  return (
    <div className={stil.card}>

      {imagine && (
        <img src={imagine} alt={titlu} className={stil.imagine} />
      )}

      <h3 className={stil.titlu}>{titlu}</h3>
      <p className={stil.descriere}>{descriere}</p>
      <span className={stil.pret}>{pret} lei</span>

      <button className={stil.buton} onClick={adaugaInCos}>
        Adauga in cos 🛒
      </button>

    </div>
  );
}

export default CardMeniu;