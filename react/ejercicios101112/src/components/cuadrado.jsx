import React, { useState, useEffect } from 'react';

const idleStyle = {
  width: '255px',
  height: '255px',
  backgroundColor: 'black'
}

const SquareMouseEnter = ({ propStyle, mouseLeaveAction, doubleClickAction}) => {
  return (
    <div 
      style={propStyle} 
      onMouseLeave={mouseLeaveAction} 
      onDoubleClick={doubleClickAction}
    >
    </div>
  )
}

const SquareIdle = ({ propStyle, mouseEnterAction}) => {
  return (
    <div style={propStyle} onMouseEnter={mouseEnterAction}></div>
  )
}

const CuadradoComponent = () => {

  const mouseEnterStyle = {
    width: '255px',
    height: '255px',
    backgroundColor: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
  }
  
  let squareDraw;
  const [hover, setHover] = useState(false);
  const [reload, setReload] = useState(mouseEnterStyle);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    let interval;

    const reloadComponent = async () => {
      try {
        setReload(mouseEnterStyle);
      } catch (e) {
        console.log(e);
      }
    }

    if(autoRefresh) {
      interval = setInterval(() => {
        reloadComponent()
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  });

  const changeHoverState = () => {
    setHover(!hover);
  }

  const changeAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
  }

  if(hover) {
    squareDraw = <SquareMouseEnter 
                    propStyle={reload} 
                    mouseLeaveAction={changeHoverState} 
                    doubleClickAction={changeAutoRefresh} />
  } else {
    squareDraw = <SquareIdle propStyle={idleStyle} mouseEnterAction={changeHoverState} />
  }

  return (
    <div>
      {squareDraw}
    </div>
  );
}

export default CuadradoComponent;
