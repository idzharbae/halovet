import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    render(){
        const articles = [];
        return(
            <div>
                <Col sm={12} md={6} lg={3}>
                    <Card bg="primary">
                        <Card.Body>
                            <Card.Title>Test</Card.Title>
                            test
                        </Card.Body>
                    </Card>
                </Col>
            </div>        
        )
    }
}

export default Dashboard;