import React, { useEffect, useState } from 'react';

const ClockF = (props) => {
  const [fecha, setFecha] = useState(new Date().toLocaleTimeString());
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    let timerID = setInterval(() => {
      setFecha(new Date().toLocaleString());
      setEdad(edad + 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    }
  },);

  return (
    <div>
        <h2>
          Hora Actual:
          {fecha}
        </h2>
        <h3>{props.nombre} {props.apellidos}</h3>
        <h1>Edad: {edad}</h1>
    </div>
  )
}

export default ClockF;