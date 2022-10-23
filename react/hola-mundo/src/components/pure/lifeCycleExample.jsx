/**
 * Ejemplo de componente de tipo clase que dispone de los metodos
 * de ciclo de vida
 */
import React, { Component } from 'react';

class LifeCycleExample extends Component {

  constructor(props) {
    super(props)
    console.log('Cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('WILLMOUNT: Antes del montaje del componente')
  }

  componentDidMount() {
    console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
  }

  componentWillReceiveProps(props){
    console.log('WillReceiveProps: Si va a recibir nuevas props')
  }

  shouldComponentUpdate(nextProps, nextState){
    //return true
  }

  componentWillUpdate(nextProps, nextState){
    console.log('WillUpdate: Justo antes de actualizarse')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate: Justo después de actualizarse')
  }

  componentWillUnmount(){
    console.log('WillReceiveProps: Si va a recibir nuevas props')
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default LifeCycleExample;