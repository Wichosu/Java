import React, { useState } from 'react';
import Child from '../pure/child.jsx';

const Father = () => {

  const [name, setName] = useState('Luis');

  function showMessage(text) {
    alert(`Message received: ${text}`)
  }
  
  function updateName(newName) {
    setName(newName)
  }

  return (
    <div style={{background: 'tomato', padding: '10px'}}>
      <Child 
        send={showMessage} 
        name={name}
        update={updateName}
        />
    </div>
  );
}

export default Father;
