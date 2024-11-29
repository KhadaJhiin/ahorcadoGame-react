const palabra = "joselo";

const listaPalabra = palabra.split('');

const indices = (lista,palabra) =>{
  let indices = [];
  lista.forEach((element,index) => {
    element === palabra && indices.push(index)
  });
  return indices;
}

let listaImprimir = [];

listaImprimir = indices(listaPalabra,'j');

console.log(listaImprimir);

