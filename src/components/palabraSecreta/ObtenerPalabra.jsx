import listaPalabra from './listaPalabras.json';

const ObtenerPalabra = () => {

    const indice = Math.floor(Math.random()*listaPalabra.length);
    return(listaPalabra[indice])
    
}
export default ObtenerPalabra;
