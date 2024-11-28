import Swal from "sweetalert2";

export const validarSubmit = (entrada) => {
  if (!entrada.trim()) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Obligatorio el envío de una sola letra",
    });
  }
};


export const validarChange = (value, setForm, form) => {
  if (value.length > 1 || !/^[a-zA-Z\s]*$/.test(value)) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No números ni más de una letra",
    }).then(() => {
      setForm({
        ...form,
        entrada: "",
      });
    });
  }
};