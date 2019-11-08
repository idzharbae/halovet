import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Test(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Test
      </p>
      
      <Button variant="danger">
          <a href="/" style={{color: "white"}}>
          Go to home
          </a>
      </Button>
    </header>
  );
}

export default Test;
