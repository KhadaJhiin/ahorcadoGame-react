//Importacion de componentes y demas
import { useState } from "react";
import Header from "./components/pages/Header";
import ListaLetras from "./components/manejoPalabra/ListaLetras";
import Form from "./components/manejoPalabra/Form";
import {ObtenerDificultad,obtenerIntentos} from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";
import Intentos from "./components/manejoPalabra/Intentos";
import Alerta from "./components/alertas/Alerta";

//Declaracion funciones o variables
const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);
const intentos = obtenerIntentos(dificultad);

//Renderizado de la APP
const App = () => {
  const [letra, sentLetra] = useState("");
  const [intentosR, setIntentosR] = useState(intentos + 2);

  const valorLetra = (entrada) => {
    sentLetra(entrada);
  };
  const restarIntento = () => {
    setIntentosR((prevIntentos) => prevIntentos - 1);
  };

  return (
    <>
      <Header />
      <ListaLetras
        palabra={palabra}
        letraEntrada={letra}
        intentosF={restarIntento}
      />
      <Intentos intentos={intentosR} />
      <Form valorLetra={valorLetra} />
      <p className="dificultad">Dificultad : {dificultad}</p>
    </>
  );
};
export default App;
