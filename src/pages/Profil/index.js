import React from 'react';
import { Button, Form, Col, Alert,Row ,Container} from 'react-bootstrap';
import './Profil.css';
import Image from 'react-bootstrap/Image'

function Profil(){
    return(
      <div style={{backgroundImage: "url('/img/Blue.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
      <Container style={{backgroundColor: "white"}}>
        <h3 style={{padding: '50px 100px 0px 480px',color:'#0080ff'}}>Profil User</h3>
       <Image style={{padding: '5px 1px 0px 400px', height: '300px'}} src="/img/testimonials-1.jpg" rounded />
        <Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridNama">
      <Form.Label>Nama</Form.Label>
      <Form.Control type="text" placeholder="Nama" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Alamat</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control /> 
    </Form.Group>
  
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Nama Hewan</Form.Label>
    <Form.Control placeholder="Nama hewan" />
  </Form.Group>
  
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Jenis Hewan</Form.Label>
    <Form.Control placeholder="Jenis hewan" />
  </Form.Group>
  <Button variant="secondary">Change</Button>
</Form>
      </Container>
      </div>
    );
}
export default Profil;