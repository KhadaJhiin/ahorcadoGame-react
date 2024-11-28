export const ObtenerDificultad = (text) => {
  if (text.length <= 4) {
    return "Facil";
  } else if (text.length > 4 && text.length <= 6) {
    return "Medio";
  } else {
    return "Dificil";
  }
};


