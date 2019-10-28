import React from 'react';
import logo from './logo.svg';
import { Button} from 'react-bootstrap';
import Navigation from './main_layout/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Button variant="danger">Danger !</Button>
      </header>
    </div>
  );
}

function Link(){
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
}

export default App;
