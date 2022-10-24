import logo from './logo.svg';
import './App.css';
import Clock from './components/clock.jsx';
import ClockF from './components/clockF.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock /> */}
        <ClockF 
          nombre='Luis'
          apellidos='Miranda'
        />
      </header>
    </div>
  );
}

export default App;