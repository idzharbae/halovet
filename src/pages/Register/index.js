import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state;
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    axios.post('http://0.0.0.0:8000/account/register', queryString.stringify({ name, email, password }), config)
      .then((result) => {
        console.log(result);
        window.location.href = '/login?redirectionMessage=Silahkan%20login.';
      });
  }

  render(){
    return(
        <header className="App-header">
        <Form onSubmit={this.onSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="fromBasicName" sm={12} md={6}>
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control onChange={this.onChange} name="name" type="name" placeholder="Masukan nama lengkap" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="fromBasicEmail" sm={12} md={6}>
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Masukan alamat email" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formBasicPassword" sm={12} md={6}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formBasicCheckbox" sm={12} md={6}>
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </header>
    );
  }
}

export default withRouter(Register);
