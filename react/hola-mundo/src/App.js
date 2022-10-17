import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingF from './components/pure/greetingF.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Luis" /> */}
        <GreetingF name="Luis"/>
      </header>
    </div>
  );
}

export default App;
