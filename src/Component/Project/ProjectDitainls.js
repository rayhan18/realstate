import React, { Component } from 'react'
import { Container,Row,Col,Button,Tab,Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart ,faComments,faPhone} from '@fortawesome/free-solid-svg-icons'
//import {faFacebookSquare,faTwitter,faInstagramSquare, faYoutube}from '@fortawesome/free-brands-svg-icons'
import aprtment from '../Images/living1.jpg'
import living2 from '../Images/living2.jpg'
import living3 from '../Images/living3.jpg'
import living4 from '../Images/living4.jpg'
export default class ProjectDitainls extends Component {
    render() {
        const imgTabStyle={
            height:'165px'
        }
            const navTabs= {
                borderBottom:0 
            }
            const bigimg={
                width:'100%',
                height: '650px'
            }
               
            
        return (
            <div>
                <Container className="mt-5 slideInUp">
                    <Row>
                        <Col sm={12}md={9} lg={9}>
                          <div>
                          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                    <Nav style={navTabs} variant="tabs" className="flex-column ">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">
                                        <img style={imgTabStyle} src={aprtment} alt="apartment" />
                                       
                                        </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">
                                        <img style={imgTabStyle} src={living2} alt="apartment" />
                                        </Nav.Link>
                                        <Nav.Link eventKey="thard">
                                        <img style={imgTabStyle} src={aprtment} alt="apartment" />
                                        </Nav.Link>
                                        <Nav.Link eventKey="fourt">
                                        <img style={imgTabStyle} src={living2} alt="apartment" />
                                        </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        <img style={bigimg} src={aprtment} alt="apartment" />
                                        <h2 className="text-center border p-2 bg-light">Luxary Apartment for rent /sell</h2>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <img style={bigimg}  src={living2} alt="apartment" />
                                        <h2 className="text-center border p-2 bg-light">Luxary Apartment for rent /sell</h2>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thard">
                                        <img style={bigimg}  src={living3} alt="apartment" />
                                        <h2 className="text-center border p-2 bg-light">Luxary Apartment for rent /sell</h2>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourt">
                                        <img style={bigimg} src={living4} alt="apartment" />
                                        <h2 className="text-center border p-2 bg-light">Luxary Apartment for rent /sell</h2>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                                </Tab.Container>
                          </div>
                            <div className="mt-3 mb-2 ml-5">
                                <Row className="projectDetails">
                                <Col sm={12}md={4} lg={4}>
                                    <p><span style={{color:'tomato'}}>City:</span> Al Riyadh</p>
                                    <p> <span style={{color:'tomato'}}>Number of bathrooms:</span> 4 Bathrooms :2</p>
                                    <p><span style={{color:'tomato'}}>Floor:</span> First Floor || Second Floor</p>
                                    <p> <span style={{color:'tomato'}}>Price:</span> 21,000SAR</p>
                                  </Col>
                                  <Col sm={12}md={4} lg={4}>
                        <p><span style={{color:'tomato'}}>Neighborhood:</span> Al Mahdiyah</p>
                        <p> <span style={{color:'tomato'}}>Condition:</span>Furnished/Unfurnished</p>
                        <p><span style={{color:'tomato'}}>Payment Age:</span> 0 - 11 months</p>
                    </Col>
                    <Col sm={12}md={4} lg={4}>
                        <p> <span style={{color:'tomato'}}>Number of rooms:</span> 2 Bedrooms</p>
                        <p><span style={{color:'tomato'}}>Surface Area:</span> 500 m2</p>
                        <p><span style={{color:'tomato'}}>Rental period:</span> Yearly</p>
                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* //site bar==============-------------------- */}
                        <Col sm={12}md={3} lg={3}>
                         <h5 className="text-center p-2 bg-primary"><FontAwesomeIcon  style={{color:'white'}}icon={faHeart}/> Add to favorites</h5>
                         <div>
                             <div className="border p-1 text-center mb-1">
                             <h2>Price:$9999</h2>
                             <p><FontAwesomeIcon  style={{color:'tomato'}}icon={faHeart}/> Notify me if price drops</p>
                             </div>
                             
                             <Button variant="primary mb-1" size="lg" active>  <FontAwesomeIcon  style={{color:'tomato'}}icon={faPhone}/> | +966 0123456789<br/>
                                 </Button>
                                <Button variant="primary mr-2" size="lg" active><FontAwesomeIcon  style={{color:'tomato'}}icon={faComments}/> |
                                    Chat</Button>
                                   <Button variant="outline-primary " size="lg">+ | Flow</Button>
                                   <ul className="mt-3">
                                       <li>Only meet in public places.</li>
                                       <li>Never pay or transfer money in advance.</li>
                                       <li>nspect the product before you buy it.</li>
                                      <hr/>
                                   </ul>
                         </div>
                         <div className="mt-2 border p-2 bg-light">
                            <h3>The simpler, safer way to pay and get paid.</h3>
                            <h5>Join 200M active accounts worldwide.</h5>
                            <h5>All you need for an optimal integration.</h5>
                         </div>
                        </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}
