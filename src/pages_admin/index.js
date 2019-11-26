import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Button, Nav as BootstrapNav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Admin extends Component {

  render() {
    return (
      <div className="Admin">
        <SideNav
          onSelect={(selected) => {
              // Add your code here
          }}
          >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Home
                  </NavText>
              </NavItem>
              <NavItem eventKey="appointment">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Appointments
                  </NavText>
              </NavItem>
          </SideNav.Nav>
      </SideNav>
      <BootstrapNav className="justify-content-end">
        <BootstrapNav.Link href="/login">
            <Button>Login</Button>
        </BootstrapNav.Link>
        <BootstrapNav.Link href="/register">
            <Button>Register</Button>
        </BootstrapNav.Link>
      </BootstrapNav>
      <div style={{
        paddingLeft: "85px"
      }}>
      <Row>
      <Card bg="info" text="white" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text style={{color : "white"}}>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      </div>
    </div>
    );
  }
}

export default Admin;
