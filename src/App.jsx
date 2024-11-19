//Importacion de componentes y demas
import Escenario from "./components/Escenario";
import Header from "./components/Header";
import EnvioDeLetra from "./components/manejoPalabra/EnvioDeLetra";
import ListaLetras from "./components/manejoPalabra/ListaLetras";
import ObtenerDificultad from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";

//Declaracion funciones o variables
const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);

//Renderizado de la APP
const App = () => {
  return(
    <>
      <Header/>
      <Escenario/>
      <ListaLetras palabra={palabra}/>
      <h1>{palabra}</h1>
      <h2>{dificultad}</h2>
      <EnvioDeLetra/>
    </>
  )
}
export default App;

