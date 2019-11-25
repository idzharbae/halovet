import React from 'react';
import { Button, Form } from 'react-bootstrap';

const View = (props) => {
  return (
    <Form onSubmit={props.submitForm}>
      {props.formGroup(
          'Alamat Email',
          'email',
          'email',
          'Masukan alamat email',
          props.bindForm
      )}
      {props.formGroup(
          'Password',
          'password',
          'password',
          'Password',
          props.bindForm
      )}
      <Button variant="primary" type="submit">
          Submit
      </Button>
  </Form>
  );
}

export default View;