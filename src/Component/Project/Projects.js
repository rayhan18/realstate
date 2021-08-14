import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Appartment from './Appartment'

import ProjectSitebar from './ProjectSitebar'
import ButtonLink from '../ButtonLink/ButtonLink'
export default class Projects extends Component {
    constructor(){
        super()
        this.state={
            aria:"Apartments for Rent in Al Riyadh"
        }
    }
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
                   <ButtonLink/>                   
                </Container>
                <Container className="mt-5"> 
                    <h3 className="text-center bg-info p-2">Apartment</h3>                  
                    <Row>
                        
                        <Col sm={12} md={9} lg={9} >
                            
                        <Appartment />
                      
                        </Col>

                      
                          
                           
                       
                         <Col sm={12} md={3} lg={3}>                        
                           <ProjectSitebar/>                      
                        </Col>
                    </Row> 
                </Container>

            </div>
        )
    }
}

