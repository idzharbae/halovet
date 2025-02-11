import React from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import styles from './appointment.module.css';
import { getCookie } from '../../helper/cookies';

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
      <div style={{backgroundImage: "url('/img/Blue3.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
    <Container style={{backgroundColor:"white"}}>

        <Row>
            <h3 style={{padding: '50px 100px 0px 400px',color:'#0080ff'}}>Booking Dokter Hewan</h3>

        </Row>
        <Row>
            <ul>
                {appointments}
            </ul>
        </Row>
        <Row>
            <Form onSubmit={props.submitForm}>
                {props.formSelection({
                    label: 'Nama Dokter',
                    name: 'doctor_name',
                    type: 'text',
                    placeholder: 'Masukan nama dokter',
                    options:[{
                      value:"dr Mahfouz", label:"dr Mahfouz"
                    },
                    {
                      value:"dr Boyke", label:"dr Boyke"
                    }
                  ],
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
        <Row>
            <Form>
                <p style={{float:"right"}}><a href={"/appointment/user/"+getCookie('user_id')}>Appointment yang telah anda lakukan</a></p>
            </Form>
        </Row>
  </Container>
  </div>
  );
}

export default View;
