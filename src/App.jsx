//Importacion de componentes y demas
import Escenario from "./components/Escenario";
import FormAttemps from "./components/FormAttemps";
import Header from "./components/Header";
import ObtenerDificultad from "./components/palabraSecreta/ObtenerDificultad";
import ObtenerPalabra from "./components/palabraSecreta/ObtenerPalabra";

const palabra = ObtenerPalabra();
const dificultad = ObtenerDificultad(palabra);
//Renderizado de la APP
const App = () => {
  return(
    <>
      <Header/>
      <Escenario/>
      <FormAttemps/>
      <h1>{palabra}</h1>
      <h2>{dificultad}</h2>
    </>
  )
}
export default App;

/*
Tareas a realizar

1. Escoger la palabra secreta de un formato json de muchas palabras en español---------(***Cumplido***)
1.5 Generar un estado para la palabra como, facil, medio, dificil----------------------(***Cumplido***)
2. Crear un espacio en el LI para cada letra que tengamos en la palabra----------------(***En proceso***)
3. Validar que solo se envie el input cuando se le entre una letra
4. Mostrar el numero de intentos que le van quedando de un total de 10 intentos 
5. Ir mostrando en una lista las letras que se han ido usando.
6. Ir mostrando en la lista de los LI las letras que son acertadas 
7. Ir actualizando en la lista de palabras usadas solo las que no son acertadas.
8. Cuando se acaben los intentos poner perdiste
9. Si se gana poner ganaste todo esto en popups, con la opcion de reiniciar el juego  
10. Pedir el nombre del jugador al iniciar el juego para poner en titulo bienvenido + name
    e ir actualizando el titulo cada que bajen intentos como "concentrate", "o muy bien",
    "Ya valiste","cambiando de fondo etc"
11. Ir armando la horca por cada intento fallido hasta ahorcarlo

*/
