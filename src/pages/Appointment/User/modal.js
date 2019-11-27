import React, {useState} from 'react';
import {Row, Col, Card, Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from '../../../helper/cookies';

const PaymentModal = (props) => {
    const [show, setShow] = useState(false);
    const {appointment} = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const config = {
            validateStatus: function (status) {
              return status >= 200 && status <= 302;
            },
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+ getCookie('jwt')
            }
        }
        axios.post("http://0.0.0.0:8000/appointment/"+appointment.AppointmentID.toString()+"/uploadPayment", data, config)
            .then((result) => {
                const response = result.data;
                if(response.Status){
                    console.log(response);
                }else{
                    console.log(response);
                }
            })
            .catch((e) => {
                if(e.response)
                    console.log(e.response);
            })
    };
    return (
        <>
        <Card.Link href="#!" onClick={handleShow}>Upload Bukti Bayar</Card.Link>
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                <Modal.Title>Upload Bukti Bayar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Upload bukti pembayaran untuk appointment dengan dokter {appointment.Doctor_name}</Modal.Body>
                <Form.Row>
                    <Form.Label>Bukti Bayar</Form.Label>
                    <Form.Control type="file" name="file" />
                </Form.Row>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
                </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
}

export default PaymentModal;