import React, { Component } from 'react'
import { Container,Button,Row,Col } from 'react-bootstrap'
import Appartment from './Appartment'


export default class Projects extends Component {
    
    render() {
        
        return (
            <div>
                <Container fluid={true} className="projectimg">
                    <div className="">
                        {/* <img  className="projectimg" src={coverimg} alt="coverimg"/> */}
                        <h1 className="projectHeading PROSTYLE"> PROJECTS</h1>
                    </div>
                   
                </Container>
                <Container>
                    <div className="justify-item text-center mt-5 mb-1">
                    <Button variant="primary mr-2">Appartment</Button>
                    <Button variant="warning mr-2">Family House</Button>
                    <Button variant="success mr-2">Morden Villa</Button>
                    <Button variant="warning mr-2">Villa</Button>
                    <Button variant="primary mr-2">Town House</Button>
                    <Button variant="info mr-2">Office</Button>
                    </div>
                    
                </Container>
                <Container>
                    <Appartment></Appartment>
                    <Row>
                        <Col sm={12} md={9} lg={9}>
                        
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                        
                         <div >
                         
                          
                            
                          </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

