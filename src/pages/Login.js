import React from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        // this.props.state = { info : [] };
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        this.setState({ info : [] });
    }

    closeAlert(index){
        let arr = this.props.state.info;
        arr[index] = false;
        this.setState({ info : arr }); 
    }

    renderAlert(val, index){
        console.log(val);
        return <Alert 
            hidden={ !val.show }
            variant="success" 
            key={ index } 
            dismissible 
            onClose={ () => this.closeAlert(index) }>{ val.message } </Alert >;
    }

    render(){
        console.log(this.props.state);
        return(
            <header className="App-header">
                {this.props.state.info.map( (val, index) => this.renderAlert(val, index) )}
                <Form action="#" method="POST">
                    <Form.Row>
                        <Form.Group as={Col} controlId="fromBasicEmail" sm={12} md={6}>
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Masukan alamat email" />
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
                        <Form.Check type="checkbox" label="Remember me" />
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

export default Login;
