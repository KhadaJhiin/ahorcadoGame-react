import { useState, useEffect } from "react";

const ListaLetras = ({ palabra, letraEntrada }) => {
  const [array, setArray] = useState([]);

  const listaPalabra = palabra.split("");

  useEffect(() => {
    const indices = (lista, letra) => {
      lista.forEach((element, index) => {
        if(element === letra){
          setArray(prevArray => [...prevArray,index]);
        }
      });
    };
    indices(listaPalabra,letraEntrada);
  }, [letraEntrada])
  
  return (
    <ul>
      {listaPalabra.map((letra, index) =>
        array.includes(index) ? (
          <li key={index}>{letra}</li>
        ) : (
          <li key={index}></li>
        )
      )}
    </ul>
  );
};

export default ListaLetras;

/*
Usamos los props desestructurados, despues convertimos nuestra palabra en un array 
usando split con un parametro de separacion "" por ultimo convertimos cada letra en
un elemento de esa lista usando map, recordar siempre poner el KEY.
*/
/*Solucion

Tenemos que crear una funcion que retorne solo los espacios sin sen afectada por nada ()
Array.forEach()
Llama a la función pasada como parámetro para todos los elementos del array.

<ul>
      {listaPalabra.map(
        (letra, index) =>
          letra === letraEntrada ? (
            <li key={index}>{letra}</li>
          ) : (
            <li key={index}></li>
          )
      )}
    </ul>

*/
