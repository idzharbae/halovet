import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navigation.css"

function Navigation(){
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Halovet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="/artikel">Article</Nav.Link>
          <Nav.Link href="#link">Booking</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        <Nav>
            <Nav.Link href="/login">
                <Button>Login</Button>
            </Nav.Link>
            <Nav.Link href="/register">
                <Button>Register</Button>
            </Nav.Link>
            {/* <Button variant="primary">Login</Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
