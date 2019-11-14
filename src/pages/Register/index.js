import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    const data = queryString.stringify({ name, email, password }).replace(/%20/g,'+');
    console.log(data);
    axios.post('http://0.0.0.0:8000/account/register', data, config)
      .then((result) => {
        console.log(result);
        const response = result.data;
        if(response.Status === true)
          window.location.href = '/login?redirectionMessage=Silahkan%20login.';
        else
          this.props.addAlert('Register gagal: '+response.Message, "danger");
      }).catch((e) => {
        this.props.addAlert('Register gagal: terjadi kesalahan pada server.', 'danger');
        this.props.addAlert(e.response.data, 'danger');
        console.log(e.response);
      });
  }
  
  render(){
    return(
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
              <Form.Control onChange={this.onChange} name="password" type="password" placeholder="Password" />
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
    );
  }
}

export default Register;
