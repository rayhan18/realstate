import React, { Component } from 'react'
import { Container,Row,Col,Card, } from 'react-bootstrap'
import man4 from '../Images/man5.jpg'
import man2 from '../Images/man2.jpg'
import man3 from '../Images/man3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookSquare,faTwitter,faInstagramSquare, faYoutube}from '@fortawesome/free-brands-svg-icons'
import '../Style/Responsive.css'
export default class Agent extends Component {
    render() {
        
        const cartStyle={
            width: '20rem',
            borderColor: '#e8740e',
            background: 'beige',
            }
            const cartTitle={
                background: '#d97b07',
                padding:' 10px',
                marginTop: '-50px',
            }
        return (
            <div>

            <Container className="mt-5 mb-5 slideInUp">
                <div className="text-center">
                    <h2 className="bg-warning p-2 ">{this.props.title}</h2>
                    <p>{this.props.subTitle}</p>
                </div>
                
                <Row className="mt-5">
                    <Col xs={12} sm={12} md={6} lg={4} className="responsiveStyle">
                    <Card style={cartStyle}>
                        <Card.Img variant="top" src={man4} className="cartimg" />
                        <Card.Body>
                            <Card.Title style={cartTitle}>Jennie Wilson</Card.Title>
                            
                            <a href="/" className="socialLink"> <FontAwesomeIcon icon={faFacebookSquare}/></a>
                              <a href="/" className="socialLink"> <FontAwesomeIcon icon={faTwitter}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faInstagramSquare}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faYoutube}/></a>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="responsiveStyle">
                    <Card style={cartStyle}>
                        <Card.Img variant="top" src={man2} className="cartimg"/>
                        <Card.Body>
                            <Card.Title style={cartTitle}>David Strozier</Card.Title>
                            
                            <a href="/" className="socialLink"> <FontAwesomeIcon icon={faFacebookSquare}/></a>
                              <a href="/" className="socialLink"> <FontAwesomeIcon icon={faTwitter}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faInstagramSquare}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faYoutube}/></a>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="responsiveStyle">
                    <Card style={cartStyle}>
                        <Card.Img variant="top" src={man3} className="cartimg"/>
                        <Card.Body>
                            <Card.Title style={cartTitle}>James Adult</Card.Title>
                           
                            <a href="/" className="socialLink"> <FontAwesomeIcon icon={faFacebookSquare}/></a>
                              <a href="/" className="socialLink"> <FontAwesomeIcon icon={faTwitter}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faInstagramSquare}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faYoutube}/></a>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
