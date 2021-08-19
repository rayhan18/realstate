import React, { Component } from 'react'
import charts from '../Images/homeimg2.jpg'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMapMarkerAlt ,faHeart,faArrowsAltH,faCouch} from '@fortawesome/free-solid-svg-icons'
//import {faFacebookSquare,}from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
export default class PropartyItem extends Component {
    render() {
        return (
            <div>
                <Container className="slideInUp">
                    <Row>
                    

                        
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }}className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/></Button>
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
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/></Button>
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
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/></Button>
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
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button   href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/></Button>
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
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/></Button>
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
                        <Col xs={12} sm={12} md={6} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                            <Link to="/"><Card.Title >Upper portion Apartment for sale</Card.Title></Link>
                                <p style={{color:'lightslategray'}}><span style={{fontSize: '1em', color:'Tomato'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Staten Island / Queens</p>
                                <div className="d-flex">
                                <Button  href="#" variant="outline-secondary mr-1" size="sm"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger"icon={faHeart}/></Button>
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
            </div>
        )
    }
}
