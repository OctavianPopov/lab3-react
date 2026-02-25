import Header from "../componente/Header/Header";
import meniuri from "../date/meniuri.json";
import snacks from "../date/snacks.json";
import bauturi from "../date/bauturi.json";

import CardMeniu from "../componente/CardMeniu/CardMeniu";
import stil from "./Home.module.css";

import burger from "../assets/imagini/burger.png";
import nuggets from "../assets/imagini/nuggets.png";
import doubleBurger from "../assets/imagini/double.png";

import fries from "../assets/imagini/fries.png";
import hotdog from "../assets/imagini/hotdog.jfif";
import onion from "../assets/imagini/onion.jpg";
import wings from "../assets/imagini/wings.png";

import cola from "../assets/imagini/cola.png";
import fanta from "../assets/imagini/fanta.png";
import sprite from "../assets/imagini/sprite.png";
import milkshake from "../assets/imagini/milk.png";
import apa from "../assets/imagini/apa.png";

function Home({ onNavigate }) {
  const imagini = {
    1: burger,
    2: nuggets,
    3: doubleBurger,

    4: fries,
    5: hotdog,
    6: onion,
    7: wings,

    8: cola,
    9: fanta,
    10: sprite,
    11: milkshake,
    12: apa
  };

return (
  <>
    <Header onNavigate={onNavigate} />

    <div className={stil.container}>

      <h1 id="meniuri" className={stil.titlu}>Meniuri</h1>
      <div className={stil.grid}>
        {meniuri.map((meniu) => (
          <CardMeniu
            key={meniu.id}
            titlu={meniu.titlu}
            descriere={meniu.descriere}
            pret={meniu.pret}
            imagine={imagini[meniu.id]}
            categorie="meniuri"
          />
        ))}
      </div>

      <h1 id="snacks" className={stil.titlu}>Snacks</h1>
      <div className={stil.grid}>
        {snacks.map((produs) => (
          <CardMeniu
            key={produs.id}
            titlu={produs.titlu}
            descriere={produs.descriere}
            pret={produs.pret}
            imagine={imagini[produs.id]}
            categorie="snacks"
          />
        ))}
      </div>

      <h1 id="bauturi" className={stil.titlu}>Bauturi</h1>
      <div className={stil.grid}>
        {bauturi.map((produs) => (
          <CardMeniu
            key={produs.id}
            titlu={produs.titlu}
            descriere={produs.descriere}
            pret={produs.pret}
            imagine={imagini[produs.id]}
            categorie="bauturi"
          />
        ))}
      </div>

    </div>
  </>
);

}


export default Home;
