import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingF from './components/pure/greetingF.jsx';
import TaskListComponent from './components/containers/task_list.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Luis" /> */}
        {/* Componente funcional */}
        {/* <GreetingF name="Luis"/> */}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
