import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation(){
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Halovet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        <Nav>
            <Nav.Link href="#login">
                <Button>Login</Button>
            </Nav.Link>
            <Nav.Link href="#register">
                <Button>Register</Button>
            </Nav.Link>
            {/* <Button variant="primary">Login</Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
