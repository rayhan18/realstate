import React, { Component } from 'react'
import { Container,Row,Col,Button,Tab,Nav } from 'react-bootstrap'
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
                <Container>
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
                            <div>
                                <Row>
                                <Col sm={12}md={4} lg={4}>
                                    <p>city: Al Riyadh</p>
                                    <p>Number of bathrooms: 2 Bathrooms</p>
                                    <p>Floor: First Floor || Second Floor</p>
                                    <p>Price: 21,000SAR</p>
                                  </Col>
                                  <Col sm={12}md={4} lg={4}>
                        <p>Neighborhood: Al Mahdiyah</p>
                        <p>Condition:Furnished/Unfurnished</p>
                        <p>Payment Age: 0 - 11 months</p>
                    </Col>
                    <Col sm={12}md={4} lg={4}>
                        <p>Number of rooms: 2 Bedrooms</p>
                        <p>Surface Area: 500 m2</p>
                        <p>Rental period: Yearly</p>
                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={12}md={3} lg={3}>
                         <h5>Add to favorites</h5>
                         <div>
                             <h2>Price:$9999</h2>
                             <p>Notify me if price drops</p>
                             <Button variant="primary" size="lg" active>+966 0123456789<br/>
                                Click to show phone number </Button>
                                <Button variant="primary" size="lg" active>
                                   Chat</Button>
                                   <Button variant="outline-primary">+ | Flow</Button>
                                   <ul>
                                       <li>Only meet in public places.</li>
                                       <li>Never pay or transfer money in advance.</li>
                                       <li>nspect the product before you buy it.</li>
                                       <li></li>
                                   </ul>
                         </div>
                        </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}
