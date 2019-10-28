import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid style={ { backgroundColor: '#eff5f5'} }>

        <button onclick="topFunction()" id="to-top" title="Go to top">Top</button>

        <Row noGutters>
        <Col md={3} sm={6} xs={12} >
            <ul>
            <li class="col-heading">Subheading</li>
            <li>
                <i class="fa fa-phone" aria-hidden="true"></i><a href="tel:99-999-999-9999">99-999-999-9999</a>
            </li>
            <li>
                <i class="fa fa-mobile" aria-hidden="true"></i><a href="sms:99-999-999-9999">SMS Message</a>
            </li>
            <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i><a href="#">Address</a>
            </li> 
            <li>
                <i class="fa fa-envelope-square" aria-hidden="true"></i><a href="mailto:someone@yoursite.com?subject=Email Subject line">Email Us</a>  
            </li> 
            </ul>
        </Col>     

        <Col md={3} sm={6} xs={12} >
            <ul>
            <li class="col-heading">Subheading</li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            </ul>
        </Col>      

        <Col md={3} sm={6} xs={12} >
            <ul>
            <li class="col-heading">Subheading</li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            </ul>
        </Col>
        
        <Col md={3} sm={6} xs={12} >
            <ul>
            <li class="col-heading">Subheading</li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            <li><a href="#">Link to page</a></li>
            </ul>
        </Col>
        </Row> 

        <Row noGutters id="bottom-footer" >
        
        <div class="col-xs-12 col-md-5 text-center" >
            <ul class="vertical-links small">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-2 text-center" >
            <p><i class="fa fa-heart-o" aria-hidden="true"></i></p>
        </div>
        <div class="col-xs-12 col-md-5 text-center" >
            <ul>
            <li class="small">© Copyright 2019 Website by <a href="#" style={ {color : 'white'}, {fontWeight:500} }>Developr</a>. All Rights reserved.</li>
            </ul>
        </div>
        </Row> 

        </Container>
      </footer>
    );
  }
}

export default Footer;
