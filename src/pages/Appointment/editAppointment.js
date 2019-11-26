import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const EditAppointment = (props) => {
  return (
    <Div>
        <Form onSubmit={props.submitForm}>
            {props.formGroup({
                label: 'Nama Dokter',
                name: 'doctor_name',
                type: 'text',
                placeholder: 'Masukan nama dokter',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Jenis Hewan',
                name: 'pet_name',
                type: 'text',
                placeholder: 'Jenis Hewan',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Keluhan',
                name: 'complaint',
                type: 'text',
                placeholder: 'Keluhan',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Tanggal Appointment',
                name: 'time',
                type: 'date',
                placeholder: 'Tanggal',
                onchange: props.bindForm
            })}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Div>
  );
}

export default EditAppointment;