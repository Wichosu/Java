/*
  Ejemplo de uso de:
  - useState()
  - useRef()
  - useEffect()
*/

import React, { useState, useRef, useEffect} from 'react'

export default function Ejemplo2() {
  //Vamos a crear dos contadores distintos 
  //cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con useRef() para asociar una variable
  //Con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con UseEffect
   */

  /**
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente 
   * se ejecuta aquello que este dentro del useEffect()
   */

  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(miRef)
  // })

  /**
   * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
   * Cada vez que hay un cambio en contador 1, se ejecuta lo que diga el useEffect()
   * En caso de que cambie contador2, no habra ejecucion
   */

  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL CONTADOR: 1');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(miRef);
  // }, [contador1]);

  /**
   * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 O CONTADOR2
   * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
   * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
   */

  useEffect(() => {
    console.log('Cambioa en el estado')
    console.log(miRef);
  }, [contador1, contador2])


  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect()***</h1>
      <h2>CONTADOR1: { contador1 }</h2>
      <h2>CONTADOR2: { contador2 }</h2>
      {/* Elemento Referenciado */}
      <h4 href={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  )
}
