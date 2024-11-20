import { useState } from "react";

const EnvioDeLetra = () => {
  const [form, setForm] = useState({
    entrada: "a",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una letra"
          name="entrada"
          value={form.entrada}
          onChange={(e) => setForm({ ...form, entrada: e.target.value })}
        />

        <button type="submit">Enviar letra</button>
      </form>
    </>
  );
};
export default EnvioDeLetra;

//quedamos en video 66 reutilizar onchange

/*FORMULARIO CONTROLADO LO QUE ES MAS RECOMENDADO POR REACT/

Los formulario controlados lo que hacen es que se validan o demas sin necesidad de dar clic en un boton por ejemplo el en de enviar
para esto necesitamos

1. Inicializar con useState todos nuestro campos, en nuestro caso solamente uno, el campo de entrada. 
   para asociarlo con cada campo lo que hacemos es que los asociamos con el value como se ve en el codigo
   es importante hacer este use state de la manera de objeto ya que si tenemos un formulario muy grande es mas
   facil y mas comodo que estar declarando uno por uno
   " const [entrada, setEntrada] = useState('a'); " Pasamos de tener esto a 

   const [entrada, setEntrada] = useState({
    entrada:'a',
    otraEntrada:'b'
  })

2. Para actualizar el evento o para que realize los cambios es necesario de igual manera hay que usar dentro de nuestro
   campo un evento llamado onchange, aqui al poner esos puntos llamados split operation antes de tomar el valor de entrada, son para crear una copia
   de lo que ya esta hecho o de las entradas existentes,



























// import { useRef } from "react";

// const EnvioDeLetra = () => {
//   const form = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     //CAPTURAMOS LOS DATOS
//     const data = new FormData(form.current);
//     const [entrada] = object.fromEntries([...data.entries()]);

//     //VALIDAMOS LOS DATOS
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} ref={useRef}>
//         <input type="text" placeholder="Ingrese una letra" name="entrada" />
//         <button type="submit">Enviar letra</button>
//       </form>
//     </>
//   );
// };
// export default EnvioDeLetra;

// //FORMULARIOS NO CONTROLADOS

// /*
// Este formulario lo vamos a procesar con Form data, lo que hace es un recorrido por nuestros campos
// y captura sus datos. 

// 1. Poner el atributo name a cada input o elemento de nuestro formulario

// 2. Usamos el evento onSubmit en nuestro formulario, recordar que handle es solo una convension
//    para referirnos a funciones que van a ser controladas por eventos

// 3. Quitamos el comportamiento por defecto de nuestro formulario que es enviar los datos a travez
//    de la barra del search como con get.
//    Esto lo hacemos activando el prevent default a nuestro formulario solo poniendolo dentro de la
//    funcion handleSubmit

// 4. Usamos los hooks:
//    useState :  Esto lo que hace es que nos crea una referencia, como cuando usamos el query selector by id 
//                 para poder manipular el DOM. La creamos en nulo, por que cuando creamos esa referencia aun
//                 no esta renderizado el formulario.
//                 Ponermos esta referencia en el formulario como si fuera un ID
//                 El form.current es en realidad donde se encuentra todo nuestro form y de ahi tomaremos los
//                 datos que necesitemos. 

//     FormData: Esto lo que hace es que nos convierte nuestro formulario en una especie de objeto y de ahi 
//               podemos tomar los valores por ejemplo de la entrada o entry.

//     Object.From.Entries: Esto lo que hace es que coge de nuestro formulario las entradas las cuales estan
//                          identificadas por el nombre de cada de las entradas en este caso nuestro solo el 
//                          nombre de un input que es "entrada" incluso lo podemos desestructurar para hacer una
//                          manipulacion mas facil de los datos. 
// */
