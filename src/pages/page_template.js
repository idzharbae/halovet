import React from 'react';
import { Form, Col } from 'react-bootstrap';

class PageTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: (<div>nothing</div>)
        }
    }
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    bindForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = (e) => {
        
    }

    formGroup(label="", name="", type="", placeholder="",  onchange=null ){
        return(
            <Form.Row>
                <Form.Group as={Col} sm={12} md={6}>
                <Form.Label>{label}</Form.Label>
                <Form.Control onChange={onchange} name={name} type={type} placeholder={placeholder}/>
                </Form.Group>
            </Form.Row>
        );
    }
    render(){
        return this.state.view;
    }
}

export default PageTemplate;