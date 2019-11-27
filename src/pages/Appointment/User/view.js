import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';
import styles from '../appointment.module.css';
import { getCookie } from '../../../helper/cookies';
import ensureArray from 'ensure-array';
import PaymentModal from './modal';

const View = (props) => {
    const appointments = [];
    ensureArray(props.appointments).forEach((appointment) => {
        appointments.push(
            <>
            <Row style={{marginBottom: "15px"}}>
                <Card as={Col} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{appointment.Doctor_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{appointment.Time_Appointment}</Card.Subtitle>
                        <Card.Text>
                            {appointment.Complaint}
                        </Card.Text>
                        <Card.Text>
                            { appointment.IsPaid?"Lunas":"Belum Lunas" }
                        </Card.Text>
                        <PaymentModal appointment={appointment}/>
                    </Card.Body>
                </Card>
             </Row>
            </>
        )
    })
  return (
      <div style={{backgroundImage: "url('/img/Blue.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
    <Container style={{backgroundColor:"white"}}>
        
        <Row>
            <h3 style={{padding: '50px 100px 0px 400px',color:'#0080ff'}}>Booking Dokter Hewan</h3>

        </Row>
        <Row>
            <ul>
                {appointments}
            </ul>
        </Row>
  </Container>
  </div>
  );
}

export default View;