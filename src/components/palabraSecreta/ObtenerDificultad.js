export const ObtenerDificultad = (text) => {
  if (text.length <= 4) {
    return "Facil";
  } else if (text.length > 4 && text.length <= 6) {
    return "Medio";
  } else {
    return "Dificil";
  }
};

export const obtenerIntentos = (dificultad) => {
  if(dificultad === 'Dificil'){
    return 15;
  }else if (dificultad === 'Medio') {
    return 10;
  }else{
    return 5;
  }
}
