import Alerta from "../alertas/Alerta";

const ValidacionSubmit = (entrada) => {
  if (!entrada.trim()) {
    return (
      <Alerta
        tipo="Error"
        mensaje="Ingresar al menos una letra"
      />
    );
  }
};

const validarChange = (value, setForm, form) => {
  if (value.length > 1 || !/^[a-zA-Z\s]*$/.test(value)) {
    return (
      <Alerta
        tipo="Error"
        mensaje="Ingresar una sola letra"
      />
    ).then(() => {
      setForm({
        ...form,
        entrada: "",
      });
    });
  }
};

export { ValidacionSubmit, validarChange };
