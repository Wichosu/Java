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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Luis" /> */}
        {/* Componente funcional */}
        {/* <GreetingF name="Luis"/> */}
        <TaskListComponent />
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
      </header>
    </div>
  );
}

export default App;
