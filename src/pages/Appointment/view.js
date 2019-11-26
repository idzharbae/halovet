import React from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

const View = (props) => {
    const appointments = [];
    for(let i = 0; i < props.appointments.length; i++){
        appointments.push(<li>
            <ul>
            <li>ID : {props.appointments[i].AppointmentID}</li>
            <li>Tanggal : {props.appointments[i].Time_Appointment}</li>
            <li>Dokter : {props.appointments[i].Doctor_name}</li>
            <li>Keluhan : {props.appointments[i].Complaint}</li>
            <li>Pembayaran : { (props.appointments[i].IsPaid)?"Lunas":"Belum lunas" }</li>
            </ul>
            </li>)
    }
  return (
    <Container>
        <Row>
            <h1>Your Appointments</h1>

        </Row>
        <Row>
            <ul>
                {appointments}
            </ul>
        </Row>
        <Row>
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
        </Row>
        
  </Container>
  );
}

export default View;