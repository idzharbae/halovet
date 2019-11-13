import React from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import './Login.css';
import update from 'immutability-helper';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { redirectionMessage : [] };
    }

    componentDidMount(){
        // get redirection message from props
        if(this.props.state)
            this.setState({ redirectionMessage : this.props.state.redirectionMessage});
        // get redirection message from url param
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('redirectionMessage');
        if(data)
            this.setState({
                redirectionMessage: update(
                    this.state.redirectionMessage, {
                        $push : [
                            {
                                message: data, 
                                show: true
                            }
                        ] 
                    })
            })
    }

    componentWillUnmount(){
        this.setState({ redirectionMessage : [] });
    }

    closeAlert(index){
        this.setState({
            redirectionMessage: update(
                this.state.redirectionMessage, { 
                    // index harus di kurungin gini kalau pakai variable
                    [index] : {
                        $set: { 
                            message: 'test', show:false 
                        } 
                    } 
                } )
          })
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
        // console.log(this.props.state);
        const arr = this.state.redirectionMessage;
        console.log(arr);
        return(
            <header className="App-header">
                { arr.map( (val, index) => this.renderAlert(val, index) )}
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
