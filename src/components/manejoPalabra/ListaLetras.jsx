const ListaLetras = ({ palabra }) => {
  return (
    <ul>
      {palabra.split("").map((letra, index) => (
        <li key={index}>{letra}</li>
      ))}
    </ul>
  );
};

export default ListaLetras;

/*
Usamos los props desestructurados, despues convertimos nuestra palabra en un array 
usando split con un parametro de separacion "" por ultimo convertimos cada letra en
un elemento de esa lista usando map, recordar siempre poner el KEY.
*/