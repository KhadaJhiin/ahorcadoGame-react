//Importacion de componentes y demas
import { useState, useEffect } from "react";
import Header from "./components/pages/Header";
import ListaLetras from "./components/manejoPalabra/ListaLetras";
import Form from "./components/manejoPalabra/Form";
import {
  ObtenerDificultad,
  obtenerIntentos,
} from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";
import Intentos from "./components/manejoPalabra/Intentos";
import Alerta from "./components/alertas/Alerta";

//Declaracion funciones o variables
const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);
const intentos = obtenerIntentos(dificultad);

//Renderizado de la APP
const App = () => {
  const [verAlertaW, setVerAlertaW] = useState(false);
  const [letra, sentLetra] = useState("");
  const [intentosR, setIntentosR] = useState(intentos + 2);
  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

  const valorLetra = (entrada) => {
    sentLetra(entrada);
  };
  const restarIntento = () => {
    setIntentosR((prevIntentos) => prevIntentos - 1);
  };
  useEffect(() => {
    const gameOver = () => {
      if (intentosR < 1) {
        setAlerta({ tipo: "Perdiste", mensaje: "Vuelve a intentarlo" });
        setVerAlertaW(true);
        return;
      }
    };
    gameOver();
  }, [intentosR])
  
  const cerrarAlerta = () => {
    setAlerta({ tipo: "", mensaje: "" });
    setVerAlertaW(false);
  };

  return (
    <>
      {alerta.mensaje && (
        <Alerta
          tipo={alerta.tipo}
          mensaje={alerta.mensaje}
          cerrarAlerta={cerrarAlerta}
        />
      )}
      <Header />
      <ListaLetras
        palabra={palabra}
        letraEntrada={letra}
        intentosF={restarIntento}
      />
      <Intentos intentos={intentosR} />
      <Form valorLetra={valorLetra} verAlertaW={verAlertaW} />
      <p className="dificultad">Dificultad : {dificultad}</p>
    </>
  );
};
export default App;
