import React, { Component } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap'
import pro from '../Images/unnamed.jpg'
export default class Login extends Component {
    render() {
        const imgstyle={
            width: '100%',
            height:' 200px'
        }
        return (
            <div>
                <Container fluid={true} className="slideInUp" >
                    <div className="contact">
                           <img style={imgstyle} src={pro} alt="banner"/>
                      
                        <h3 className="contact-text">Contact us</h3>
                    </div>
                 
                </Container>
                <Container className="mt-5 mb-5">

                    <Row>
                        <Col sm={12} md={8} lg={8}>
                           <Form>
                           <Row className="mb-3">
                           <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                               
                               
                                
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                           </Form>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                        
                        </Col>
                    </Row>
                
              
                </Container>
            </div>
        )
    }
}
