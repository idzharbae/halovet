import React from 'react';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';

function Test(){
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Test
      </p>
      
      <Button variant="secondary">Test</Button>
    </header>
  );
}

export default Test;
