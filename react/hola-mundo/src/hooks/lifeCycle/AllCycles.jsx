import React, {useEffect} from 'react';

const AllCycles = () => {

  useEffect(() => {
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log('actualizado del componente');
    }, 1000);

    return () => {
      console.log('Componente a desaparecer');
      document.title = 'Tiempo detenido';
      clearInterval(intervalID);
    }
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default AllCycles;
