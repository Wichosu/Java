import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ContactList from './components/container/contactList.jsx';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <ContactList />
      </header>
    </div>
  );
}

export default App;
