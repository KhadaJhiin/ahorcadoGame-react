import { useState, useEffect } from "react";
import  Alerta from "../alertas/Alerta";

const ListaLetras = ({ palabra, letraEntrada, intentosF }) => {
  const [array, setArray] = useState([]);
  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

  const listaPalabra = palabra.split("");

  const longitud = listaPalabra.length;

  const indices = (lista, letra) => {
    let found = false;
    lista.forEach((element, index) => {
      if (element === letra) {
        setArray((prevArray) => [...prevArray, index]);
        found = true;
      }
    });
    return found;
  };
  useEffect(() => {
    const victoria = () => {
      if (longitud === array.length) {
        setAlerta({ tipo: "Ganaste", mensaje: "Juega otra vez !" });
        return;
      }
    };
    victoria();
  }, [array]);

  const cerrarAlerta = () => {
    setAlerta({ tipo: "", mensaje: "" });
  };

  useEffect(() => {
    if (indices(listaPalabra, letraEntrada)) {
      return;
    } else {
      intentosF();
    }
  }, [letraEntrada]);

  return (
    <>
      <ul className="listaLetras">
        {listaPalabra.map((letra, index) =>
          array.includes(index) ? (
            <li
              className="elementoLista"
              key={index}
            >
              {letra}
            </li>
          ) : (
            <li
              className="elementoLista"
              key={index}
            ></li>
          )
        )}
      </ul>
      {alerta.mensaje && (
        <Alerta
          tipo={alerta.tipo}
          mensaje={alerta.mensaje}
          cerrarAlerta={cerrarAlerta}
        />
      )}
    </>
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
