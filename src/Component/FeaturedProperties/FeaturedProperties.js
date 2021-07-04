import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Card ,Button,} from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMapMarkerAlt ,faHeart,faArrowsAltH,faCouch} from '@fortawesome/free-solid-svg-icons'
//import {faFacebookSquare,}from '@fortawesome/free-brands-svg-icons'

export default class FeaturedProperties extends Component {
    //http://preview.themeforest.net/item/evernest-real-estate-html-template/full_screen_preview/27642418?_ga=2.173021027.1714684018.1624527623-1364047746.1624527523
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="text-center mt-5 mb-4">
                        <h2 className="display-3">Featured Properties</h2>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </div>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card style={{ width: '21rem', border:'none',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
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
                            <Card style={{ width: '21rem', border:'none',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
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
                            <Card style={{ width: '21rem', border:'none',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
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
                <Container fluid={true} className="fucherbgimg">
                    <div className="text-center mt-5  fuchearHeading">
                        <h2 className=" display-3">Buy or sell your house</h2>
                        <p>Donec placerat dolor id neque pretium placerat. Donec in facilisis risus. In sollicitudin magna luctus sem ultrices convallis. Sed quis ex vel tellus ullamcorper malesuada. Aenean facilisis ex dolor, id vehicula nisl consectetur dapibus. Phasellus mollis mauris semper placerat convallis. Morbi varius facilisis dignissim. Donec eu sollicitudin nunc. Aliquam in nisi id arcu gravida vehicula quis nec sapien. Fusce at dolor ex.</p>
                        <Button variant="warning mr-3">Start Search Now</Button>
                        <Button variant="warning">Brows Proparties</Button>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
