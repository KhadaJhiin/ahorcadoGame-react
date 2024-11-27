import listaPalabra from "./listaPalabras.json";

const normalizarPalabra = (palabra) => {
  return palabra
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/ñ/g, "n") 
    .replace(/Ñ/g, "N"); 
};

const ObtenerPalabra = () => {
  const indice = Math.floor(Math.random() * listaPalabra.length);
  const palabraNormalizada = normalizarPalabra(listaPalabra[indice]);
  return palabraNormalizada;
};
export default ObtenerPalabra;
