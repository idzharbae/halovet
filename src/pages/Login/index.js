import React from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { info : [] };
    }

    componentDidMount(){
        if(this.props.state)
            this.setState({ info : this.props.state.info});
    }

    componentWillUnmount(){
        this.setState({ info : [] });
    }

    closeAlert(index){
        this.setState(state => {
            const list = state.info.map((item, j) => {
                console.log(j);
              if (j === index) {
                return {message : item.message, show : false};
              } else {
                return item;
              }
            });
            return {
              list,
            };
        });
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
        let arr = this.state.info;
        const urlParams = new URLSearchParams(window.location.search);
        const info = urlParams.get('info');
        if(info)
            arr.push({message: info, show: true});
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
