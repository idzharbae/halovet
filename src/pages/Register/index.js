import React from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';
import update from 'immutability-helper';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      alertMessage: []
    };
  }
  addAlert(message, variant){
    this.setState({
      alertMessage: update(
          this.state.alertMessage, {
              $push : [
                  {
                      message: message, 
                      show: true,
                      variant: variant
                  }
              ] 
          })
    })
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
          this.addAlert('Register gagal: '+response.Message, "danger");
      }).catch((e) => {
        this.addAlert('Register gagal: terjadi kesalahan pada server.', 'danger');
        this.addAlert(e.response.data, 'danger');
        console.log(e.response);
      });
  }
  closeAlert(index){
    this.setState({
      alertMessage: update(
          this.state.alertMessage, { 
              // index harus di kurungin gini kalau pakai variable
              [index] : {
                  $set: { 
                      show:false 
                  } 
              } 
          } )
    })
  }
  
  renderAlert(val, index){
      return <Alert 
          hidden={ !val.show }
          variant={ val.variant }
          key={ index } 
          dismissible 
          onClose={ () => this.closeAlert(index) }>{ val.message } </Alert >;
  }
  render(){
    const arr = this.state.alertMessage;
    return(
        <header className="App-header">
        { arr.map( (val, index) => this.renderAlert(val, index) )}
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
        </header>
    );
  }
}

export default Register;
