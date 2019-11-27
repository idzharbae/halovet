import { Button, Form, Col, Alert, Card } from 'react-bootstrap';
import React from 'react';

const View = (props) => {
    const background = '/img/anjing.jpg';
    return(
    <Card style={{
      backgroundImage: `url(${background})`,
      minHeight: `500px`
    }}>
        <Card.Body>
          <h3 style={{padding: '50px 100px 0px 500px',color:'#0080ff'}}>Forum tanya jawab</h3>
          <Form onSubmit={props.submitForm}>
            {props.formGroup({
                label: 'Judul',
                name: 'title',
                type: 'text',
                placeholder: 'Judul Post',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Kategori',
                name: 'category',
                type: 'text',
                placeholder: 'Kategori',
                onchange: props.bindForm
            })}
            {props.formGroup({
                label: 'Konten',
                name: 'content',
                type: 'text',
                placeholder: 'Konten',
                onchange: props.bindForm
            })}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Card.Body>
    </Card>
    );
}

export default View;