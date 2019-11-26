import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const View = (props) => {
  return (
    <Form onSubmit={props.submitForm}>
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
      <Button variant="primary" type="submit">
          Submit
      </Button>
  </Form>
  );
}

export default View;