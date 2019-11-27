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
    <div>
        <Container>
            <Row>
                <h1 text="black" style={{color: "black", marginTop: "15px"}}>Pertanyaan dari pengguna</h1>
            </Row>
            {topics}
        </Container>
    
    <Row sm={12}>
        <Col sm={12}>
    <Card style={{
      backgroundImage: `url(${background})`,
      minHeight: `500px`
    }} sm={12}>
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