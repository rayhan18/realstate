import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Card ,Button,} from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMapMarkerAlt ,faHeart,faArrowsAltH,faCouch} from '@fortawesome/free-solid-svg-icons'
//import {faFacebookSquare,}from '@fortawesome/free-brands-svg-icons'
import '../Style/Responsive.css'
export default class FeaturedProperties extends Component {
  
    render() {
        return (
            <Fragment>
                <Container className="slideInUp mx-auto">
                    <div className="text-center mt-5 mb-4">
                        <h4 className="display-4">{this.props.title}</h4>
                        <h5>
                            {this.props.subTitle}
                        </h5>
                    </div>
                    <Row className="ml-auto mr-auto">
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart mx-auto">
                            <Card className="  img-hover-zoom--colorize img ">
                            <Card.Img variant="top mt-3 " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon icon={faHeart}/></Button>
                                <Button  href="#" variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faArrowsAltH}/></Button>
                                <h4 style={{color:'tomato', marginLeft:'10px'}}>$800.00</h4>

                                </div>
                                <div className="border  mt-2">
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Bedrooms-4</Button>
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>Bathrooms-2</Button>
                                <Button style={{fontSize:'14px'}} variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Garage 1</Button>
                                  
                                </div>
                                    <div className="d-flex mt-4">
                                        <h3 className="apart"> Appartment</h3>
                                        <h3 className="sale"> For sale</h3>
                                    </div>
                               
                               
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card className="img-hover-zoom--colorize img">
                            <Card.Img variant="top mt-3 " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon icon={faHeart}/></Button>
                                <Button  href="#" variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faArrowsAltH}/></Button>
                                <h4 style={{color:'tomato', marginLeft:'10px'}}>$800.00</h4>

                                </div>
                                <div className="border  mt-2">
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Bedrooms-4</Button>
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>Bathrooms-2</Button>
                                <Button style={{fontSize:'14px'}} variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Garage 1</Button>
                                  
                                </div>
                                    <div className="d-flex mt-4">
                                        <h3 className="apart"> Appartment</h3>
                                        <h3 className="sale"> For sale</h3>
                                    </div>
                               
                               
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card className="img-hover-zoom--colorize img">
                            <Card.Img variant="top mt-3 " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon icon={faHeart}/></Button>
                                <Button  href="#" variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faArrowsAltH}/></Button>
                                <h4 style={{color:'tomato', marginLeft:'10px'}}>$800.00</h4>

                                </div>
                                <div className="border  mt-2">
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Bedrooms-4</Button>
                                <Button style={{fontSize:'14px'}}variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>Bathrooms-2</Button>
                                <Button style={{fontSize:'14px'}} variant="light" disabled><FontAwesomeIcon icon={faCouch}/><br/>
                                Garage 1</Button>
                                  
                                </div>
                                    <div className="d-flex mt-4">
                                        <h3 className="apart"> Appartment</h3>
                                        <h3 className="sale"> For sale</h3>
                                    </div>
                               
                              
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
