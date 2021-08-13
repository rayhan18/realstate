import React, { Component } from 'react'
import { Container,Button,Row,Col } from 'react-bootstrap'
import Appartment from './Appartment'
import pro from '../Images/living5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart, faPhone, faComment} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ProjectSitebar from './ProjectSitebar'
export default class Projects extends Component {
    constructor(){
        super()
        this.state={
            aria:"Apartments for Rent in Al Riyadh"
        }
    }
    render() {
        // const imgStyle={
        //     width:'250px',
        //     height:'250px',
        //     marginLeft: '-14px',
        //     border: '5px solid #e8dfdf'
        // }
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
                    {/* <Appartment></Appartment> */}
                   
                    <Row>
                        
                        <Col sm={12} md={9} lg={9} >
                            
                        <Appartment/>
                      
                        </Col>
{/*                       
                            <Row className="apartmentrow border">
                               <Col sm={12} md={4} lg={4} className="border  mb-5">
                                 <img style={imgStyle} src={pro} alt="project" />
                                </Col> */}
                          
                           {/* <Col sm={12} md={8} lg={8}>
                                <Link to="#" style={{colot:""}}>
                                    <h4 className="mt-1 text-secondary"> Most Popular Apartments in Al Riyadh <span className="ml-auto">$999</span></h4><br/><br/><br/>
                                    <p className=" text-secondary">Most Popular Apartments</p>
                                    <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                                    <Button variant="outline-primary mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                                    <Button variant="outline-primary mx-2"> Price range - $1999.00</Button>
                                </Link>
                           </Col>
                         
                       </Row>   */}
                      
                          
                           
                       
                         <Col sm={12} md={3} lg={3}>                        
                           <ProjectSitebar/>                      
                        </Col>
                    </Row> 
                </Container>

            </div>
        )
    }
}

