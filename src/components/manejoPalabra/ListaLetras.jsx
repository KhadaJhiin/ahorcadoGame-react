const ListaLetras = ({ palabra, letraEntrada }) => {
  const listaPalabra = palabra.split("");
  return (
    <ul>
      {listaPalabra.map((letra, index) =>
        letra === letraEntrada ? (
          <li key={index}>{letra}</li>
        ) : (
          <li key={index}></li>
        )

        // Tenemos que crear un estado para usar la spread operation para guardar las letras acertadas y aumentar las nuevas en
        // cada intento.
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
