import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

  const messageRef = useRef('');
  const nameRef = useRef('');

  function pressButton(){
    const text = messageRef.current.value;
    alert(`Texting input ${text}`);
  }

  function pressButtonParam(text){
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{background: 'cyan', padding: '30px'}}>
      <p onMouseOver={() => console.log('On mouse over')}>
        Hello, {name}
      </p>
      <button onClick={() => console.log('Boton pulsado')}>
        Button 1
      </button>
      <button onClick={pressButton}>
        Button 2
      </button>
      <button onClick={() => pressButtonParam('Hola')}>
        Button 3
      </button>
      <input 
        placeholder='Send a text to your father'
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input changed:', e.target.value)} 
        onCopy= {() => console.log('Copied text from input')}
        ref={messageRef}
        />
      <button onClick={() => send('Message')}>
        Send Message
      </button>
      <div style={{marginTop: '20px'}}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder='New Name' />
          <button type='submit'>Update Name</button>
        </form>
      </div>
    </div>
  );
}

export default Child;
