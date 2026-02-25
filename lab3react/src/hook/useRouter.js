import { useState } from "react";

export function useRouter() {
  const [ruta, setRuta] = useState("home"); // IMPORTANT

  const navigheaza = (pagina) => {
    setRuta(pagina);
  };

  return { ruta, navigheaza };
}