import { Button, Form, Col, Alert, Card, Row, Container } from 'react-bootstrap';
import React from 'react';
import ensureArray from 'ensure-array';

const View = (props) => {
    const background = '/img/anjing.jpg';
    const topics = [];
    ensureArray(props.topics).forEach((topic) => {
        topics.push(
            <Row>
                <Col>
                <h3><a href={"/forum/post/"+topic.TopicID.toString()}>{topic.Title}</a></h3>
                    <p>{topic.Content}
                    {topic.Author}
                    </p>
                </Col>
            </Row>);
    })
        
    return(
        <div style={{backgroundImage: "url('/img/Blue.jpg')", paddingTop: '50px',paddingBottom: '50px'}}>
        <Container style={{backgroundColor: "white"}}>
       
    <Row sm={12}>
        <Col sm={12}>
    <Card style={{
      backgroundImage: `url(${background})`,
      minHeight: `500px`
    }} sm={12}>


        <Card.Body>
          <h3 style={{padding: '50px 100px 0px 400px',color:'#0080ff'}}>Forum tanya jawab</h3>
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
            <Form.Row>
                <Form.Group as={Col} sm={12} md={6}>
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" onChange={props.bindForm}
                 name="content"></Form.Control>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Card.Body>
    </Card>
        </Col>
    </Row>
    </Container>
    </div>
    );
}

export default View;