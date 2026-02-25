import { useRouter } from "./hook/useRouter";
import Home from "./pagini/Home";
import Profil from "./pagini/Profil.jsx";
import Cos from "./pagini/Cos";
import Navbar from "./componente/Navbar/Navbar";

function App() {
  const { ruta, navigheaza } = useRouter();

  return (
<>
  {ruta === "home" && <Home onNavigate={navigheaza} />}
  {ruta === "profil" && <Profil />}
  {ruta === "cos" && <Cos />}

  <Navbar navigheaza={navigheaza} />
</>
  );
}

export default App;