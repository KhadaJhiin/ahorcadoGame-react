const Alerta = ({ tipo, mensaje, cerrarAlerta }) => {
  return (
    <div className="alerta">
      <h3>{tipo}</h3>
      <p>{mensaje}</p>
      <button onClick={cerrarAlerta}>OK</button>
    </div>
  );
};
export default Alerta;
