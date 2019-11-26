import { Button, Form, Col, Alert, Card, Row } from 'react-bootstrap';
import React from 'react';

const View = (props) => {
    const background = '/img/anjing.jpg';
    const topics = [];
    console.log(props.topics);
    for(let i = 0; i < props.topics.length; i++)
        topics.push(
        <Row>
            <Col>
            <h3>{props.topics[i].Title}</h3>
                <p>{props.topics[i].Content}
                {props.topics[i].Author}
                </p>
            </Col>
        </Row>);
    return(
    <div>
    {topics}
    <Row sm={12}>
        <Col sm={12}>
    <Card style={{
      backgroundImage: `url(${background})`,
      minHeight: `500px`
    }} sm={12}>
        <Card.Body>
          <Card.Title>Forum tanya jawab</Card.Title>
          <Form onSubmit={props.submitForm}>
            {props.formGroup({
                label: 'Judul',
                name: 'title',
                type: 'text',
                placeholder: 'Judul Post',
                onchange: props.bindForm
            })}
            {props.formSelection({
                label: 'Kategori',
                name: 'category',
                options: [
                    {value:"penyakit kulit",label: "penyakit kulit"},
                    {value:"penyakit pencernaan",label: "penyakit pencernaan"}
                ],
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
        </Col>
    </Row>
    </div>
    );
}

export default View;