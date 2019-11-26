import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Dashboard = (props) => {
    return(
        <Row>
            <Col sm={12} md={6} lg={3}>
                <Card bg="primary">
                    <Card.Body>
                        <Card.Title>Test</Card.Title>
                        test
                    </Card.Body>
                </Card>
            </Col>
        </Row>        
    )
}

export default Dashboard;