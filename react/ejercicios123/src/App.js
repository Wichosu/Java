import logo from './logo.svg';
import './App.css';
import ContactDisplay from './components/containers/contact_display.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactDisplay />
      </header>
    </div>
  );
}

export default App;
