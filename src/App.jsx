//Importacion de componentes y demas
import { useState } from "react";
import Header from "./components/pages/Header";
import ListaLetras from "./components/manejoPalabra/ListaLetras";
import Form from "./components/manejoPalabra/Form";
import { ObtenerDificultad } from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";

//Declaracion funciones o variables
const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);

//Renderizado de la APP
const App = () => {
  const [letra, sentLetra] = useState("");

  const valorLetra = (entrada) => {
    sentLetra(entrada);
  };

  return (
    <>
      <Header />
      <ListaLetras palabra={palabra} letraEntrada={letra}/>
      <p>Dificultad : {dificultad}</p>
      <Form valorLetra={valorLetra} />
      <h1>{letra}</h1>
    </>
  );
};
export default App;

