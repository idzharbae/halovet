import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navigation.css"
import { getCookie } from '../helper/cookies';

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
    (getCookie('role') == "3"?<Nav>
      <Nav.Link href="/admin">
        <Button>admin panel</Button>
      </Nav.Link>
    <Nav.Link href="/logout">
        <Button>logout</Button>
    </Nav.Link>
  </Nav>:<Nav>
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
            <Nav.Link href="/artikel">Article</Nav.Link>
            <Nav.Link href="/appointment">Booking</Nav.Link>
            <Nav.Link href="/forumPage">Forum</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
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
