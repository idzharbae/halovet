import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Button variant="danger">
          <Link to="/test" style={{color: "white"}}>
          Go to test
          </Link>
      </Button>
    </header>
  );
}

export default Home;
