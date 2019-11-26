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

    formGroup(args){
        if(args.value)
            this.setState({[args.name] : args.value});
        const label = args.label || "";
        const name = args.name || "";
        const type = args.type || "";
        const placeholder = args.placeholder || "";
        const onchange = args.onchange || null;
        const hidden = args.hidden || false;
        
        return(
            <Form.Row>
                <Form.Group as={Col} sm={12} md={6}>
                <Form.Label>{label}</Form.Label>
                <Form.Control onChange={onchange} name={name} type={type} placeholder={placeholder} hidden={hidden}/>
                </Form.Group>
            </Form.Row>
        );
    }
    render(){
        return this.state.view;
    }
}

export default PageTemplate;