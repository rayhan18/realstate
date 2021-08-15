import React, { Component } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap'
import pro from '../Images/unnamed.jpg'
import GoogleMapReact from 'google-map-react';
// https://www.npmjs.com/package/google-map-react
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Contactus extends Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render() {
        
        const imgstyle={
            width: '100%',
            height:' 200px'
        }
        return (
            <div>
                <Container fluid={true} >
                    <div className="contact">
                           <img style={imgstyle} src={pro} alt="banner"/>
                      
                        <h3 className="contact-text">Contact us</h3>
                    </div>
                 
                </Container>
                <Container className="mt-5 mb-5 ">

                    <Row>
                        <Col style={{background:' #fe7b1373',
                                  padding: '20px'}} sm={12} md={8} lg={8}>
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
                        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
                        </Col>
                    </Row>
                
              
                </Container>
            </div>
        )
    }
}
