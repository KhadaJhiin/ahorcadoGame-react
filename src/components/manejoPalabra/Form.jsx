import { useState } from "react";
import Alerta from "../alertas/Alerta";

const Form = ({ valorLetra, verAlertaW}) => {
  const [verAlerta, setVerAlerta] = useState(false);
  const [form, setForm] = useState({
    entrada: "",
  });
  const { entrada } = form;

  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });
  // const { mensaje, tipo } = alerta;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entrada.trim()) {
      setAlerta({ tipo: "Error", mensaje: "Escribir una letra" });
      setVerAlerta(true);
      return;
    }
    valorLetra(entrada);
    setForm({
      ...form,
      entrada: "",
    });
    setAlerta({ tipo: "", mensaje: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (value.length > 1 || !/^[a-zA-Z\s]*$/.test(value)) {
      setAlerta({ tipo: "Error", mensaje: "Solo una letra, no dos" });
      setVerAlerta(true);
      return;
    }
  };
  const cerrarAlerta = () => {
    setAlerta({ tipo: "", mensaje: "" });
    setForm({
      ...form,
      entrada: "",
    });
    setVerAlerta(false);
  };

  return (
    <form
      className="formulario"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ingrese una letra"
        name="entrada"
        value={entrada}
        onChange={handleChange}
        className="inputForm"
        disabled={verAlerta}
      />
      <button
        className="inputForm"
        type="submit"
      >
        Enviar letra
      </button>
      {alerta.mensaje && (
        <Alerta
          tipo={alerta.tipo}
          mensaje={alerta.mensaje}
          cerrarAlerta={cerrarAlerta}
        />
      )}
    </form>
  );
};
export default Form;
