import React, { Component } from 'react'
import { Container ,Row,Col} from 'react-bootstrap' 

import ButtonLink from '../ButtonLink/ButtonLink'
import ProjectSitebar from '../Project/ProjectSitebar'
import Appartment from '../Project/Appartment'
export default class Villa extends Component {
    
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

             <h3 className="text-center bg-info p-2">Genaral villa</h3>
                <Row >
                    <Col sm={12} md={9} lg={9} className=" mb-3 ">

                   <Appartment/>
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
