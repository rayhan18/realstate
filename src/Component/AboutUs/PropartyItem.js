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
                    

                        
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6',justifyContent:'center' }}className="img-hover-zoom--colorize img">
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
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxob21lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
                        <Col xs={12} sm={12} md={12} lg={6} className=" mt-3 mb-2">
                        <Card style={{ width: '23rem',border: '2px solid #e1dde6' }} className="img-hover-zoom--colorize img">
                        <Card.Img variant="top  " src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
