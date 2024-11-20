import Swal from "sweetalert2";
//------------------------------------------------------------
// Función de validación para el submit-----------------------
export const validarSubmit = (entrada) => {
  if (!entrada.trim()) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Obligatorio el envío de una sola letra",
    });
  }
};
//-------------------------------------------------------------
// Función de validación para el cambio de input---------------
export const validarChange = (value, setForm, form) => {
  if (value.length > 1 || !/^[a-zA-Z\s]*$/.test(value)) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No números ni más de una letra",
    }).then(() => {
      // Restablecer el input a ningún valor
      setForm({
        ...form,
        entrada: "",
      });
    });
  }
};