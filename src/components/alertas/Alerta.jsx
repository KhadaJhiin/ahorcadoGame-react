const Alerta = ({tipo,mensaje}) => {
  return(
    <div className="alerta">
      <h3>{tipo}</h3>
      <p>{mensaje}</p>
      <button>OK</button>
    </div>
  )
};
export default Alerta;
