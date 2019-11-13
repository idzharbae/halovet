import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './Register.css';

export default class View extends React.Component{
    render(){
        return(
            <header className="App-header">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="fromBasicEmail" sm={12} md={6}>
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukan alamat email" />
                    <Form.Text className="text-muted">
                        Data email anda tidak akan kami berikan ke pihak {this.props.test}.
                    </Form.Text>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword" sm={12} md={6}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicCheckbox" sm={12} md={6}>
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </header>
        );
    }
}