import React, { useState } from 'react';

const Ejemplo1 = () => {
  //Valor inicial para un contador
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: 'Luis',
    email: 'luiscalderonmiranda@gmail.com'
  }

  /*
    Queremos que el valorInicial y PERSONAINICIAL sean
    parte del estado del componente para así poder gestionar su cambio
    y que éste se vea reflejado en la vista del componente.

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
  */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /*
    Funcion para actualizar el estado privado que contiene el contador
  */

  function incremetarContador(){
    setContador(contador + 1);
  }

  function actualizarPersona(){
    setPersona(
      {
        nombre: 'Luis',
        email: 'luiscalderonmiranda@gmail.com'
      }
    )
  }

  return(
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: { contador }</h2>
      <h2>PERSONA:</h2>
      <h3>NOMBRE: { persona.nombre}</h3>
      <h4>EMAIL: { persona.email }</h4>
      <button onClick={incremetarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;