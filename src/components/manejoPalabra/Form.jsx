import { useState } from "react";
import Swal from "sweetalert2";
import { validarSubmit, validarChange } from "./ValidarEntrada";

const Form = ({ valorLetra }) => {
  const [form, setForm] = useState({
    entrada: "",
  });
  const { entrada } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarSubmit(entrada)) {
      return
    }
    valorLetra(entrada);
    setForm({
      ...form,
      entrada: "",
    });

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    validarChange(value, setForm, form);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una letra"
        name="entrada"
        value={entrada}
        onChange={handleChange}
        className="inputForm"
      />
      <button className="inputForm" type="submit">Enviar letra</button>
    </form>
  );
};
export default Form;
