import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingF from './components/pure/greetingF.jsx';
import TaskListComponent from './components/containers/task_list.jsx';
import Ejemplo from './hooks/Ejemplo1.jsx';
import Ejemplo2 from './hooks/Ejemplo2.jsx';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled.jsx';
import Father from './components/containers/father.jsx';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Luis" /> */}
        {/* Componente funcional */}
        {/* <GreetingF name="Luis"/> */}
        {/* <Ejemplo /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* Todo lo que hay aqui, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Luis">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Luis'/> */}
        {/* <Father /> */}
        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender /> */}
        {/* Ejemplo de Formik y Yup */}
        {/* <LoginFormik /> */}
        {/* <RegisterFormik /> */}
        {/* Ejemplo de procesos asíncronos */}
        {/* <AsyncExample /> */}
        {/* Ejemplo de fetch */}
        {/* <FetchExample /> */}
        {/* Ejemplo de axios */}
        <AxiosExample />
        {/* Ejemplo de observable */}
        {/* <ObservableExample /> */}
        {/* PROYECTO FINAL: */}
        {/* <TaskListComponent /> */}
      </header>
    </div>
  );
}

export default App;
