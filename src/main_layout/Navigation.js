import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navigation.css"

class Navigation extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const rightMenu = (!this.props.login)? 
    (<Nav>
      <Nav.Link href="/login">
          <Button>Login</Button>
      </Nav.Link>
      <Nav.Link href="/register">
          <Button>Register</Button>
      </Nav.Link>
    </Nav>):
    (<Nav>
      <Nav.Link href="/logout">
          <Button>logout</Button>
      </Nav.Link>
    </Nav>);
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Halovet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/artikel">Article</Nav.Link>
<<<<<<< HEAD
            <Nav.Link href="/appointment">Booking</Nav.Link>
=======
            <Nav.Link href="/forum">Forum</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
>>>>>>> 79c66cc754fcbc7c03f977c2d95df430d03234e2
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          { rightMenu }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
