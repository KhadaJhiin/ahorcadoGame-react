const EnvioDeLetra = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
     }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese una letra" name="entrada"/>
        <button type="submit">Enviar letra</button>
      </form>
    </>
  );
};
export default EnvioDeLetra;



//REACT RECOMIENDA USAR FORMULARIOS CONTROLADOS


/*
Este formulario lo vamos a procesar con Form data, para esto tenemos que.

1. Poner el atributo name a cada input o elemento de nuestro formulario

2. Usamos el evento onSubmit en nuestro formulario, recordar que handle es solo una convension
   para referirnos a funciones que van a ser controladas por eventos

3. Quitamos el comportamiento por defecto de nuestro formulario que es enviar los datos a travez
   de la barra del search como con get.
   Esto lo hacemos activando el prevent default a nuestro formulario solo poniendolo dentro de la
   funcion handleSubmit

4. Usamos los hooks:
   useState.

   
*/
