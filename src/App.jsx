//Importacion de componentes y demas
import { useState } from "react";
import Header from "./components/body/Header";
import Escenario from "./components/body/Escenario";
import ListaLetras from "./components/manejoPalabra/ListaLetras";
import EnvioDeLetra from "./components/manejoPalabra/EnvioDeLetra";
import ObtenerDificultad from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";

//Declaracion funciones o variables
const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);

//Renderizado de la APP
const App = () => {
  const [letra, sentLetra] = useState("");
  const ponerLetra = (entrada) => {
    sentLetra(entrada);
  };

  return (
    <>
      <Header />
      <Escenario />
      <ListaLetras palabra={palabra} />
      <h1>{palabra}</h1>
      <h2>{dificultad}</h2>
      <EnvioDeLetra ponerLetra={ponerLetra} />
      <p>Letra entrada: {letra}</p>
    </>
  );
};
export default App;

