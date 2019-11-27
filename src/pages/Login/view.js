import React from 'react';
import { Button, Form,Container } from 'react-bootstrap';
import './Login.css';

const View = (props) => {
  return (
    <div style={{backgroundImage: "url('/img/Blue.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
    <Container style={{backgroundColor: "white"}}>
    <h3 style={{padding: '50px 100px 0px 500px',color:'#0080ff'}}>Login</h3>
    <Form onSubmit={props.submitForm} style={{paddingLeft: "100px"}}>
      {props.formGroup({
          label: 'Alamat Email',
          name: 'email',
          type: 'email',
          placeholder: 'Masukan alamat email',
          onchange: props.bindForm
      })}
      {props.formGroup({
          label: 'Password',
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          onchange: props.bindForm
      })}
      <Button  variant="primary" type="submit">
          Submit
      </Button>
  </Form>
  </Container>
  </div>
  );
}

export default View;