import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Secret(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Secret Page.
      </p>
      
      <Button variant="danger">
          <Link to="/" style={{color: "white"}}>
          Go to home
          </Link>
      </Button>
    </header>
  );
}

export default Secret;
