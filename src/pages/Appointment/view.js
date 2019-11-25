import React from 'react';
import { Button, Form } from 'react-bootstrap';

const View = (props) => {
  return (
    <Form onSubmit={props.submitForm}>
      {props.formGroup(
          'Nama Dokter',
          'doctor_name',
          'text',
          'Masukan nama dokter',
          props.bindForm
      )}
      {props.formGroup(
          'Jenis Hewan',
          'pet_name',
          'text',
          'Jenis Hewan',
          props.bindForm
      )}
      {props.formGroup(
          'Keluhan',
          'complaint',
          'text',
          'Keluhan',
          props.bindForm
      )}
      {props.formGroup(
          'Tanggal Appointment',
          'time',
          'date',
          'Tanggal',
          props.bindForm
      )}
      <Button variant="primary" type="submit">
          Submit
      </Button>
  </Form>
  );
}

export default View;