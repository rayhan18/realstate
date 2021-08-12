import React, { Component } from 'react'
import { Container ,Row,Col,Button} from 'react-bootstrap'
import ProjectSitebar from './ProjectSitebar'
import pro from '../Images/living5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart, faPhone, faComment} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default class Appartment extends Component {
    constructor(){
        super()
        this.state={
            aria:"Apartments for Rent in Al Riyadh"
        }
    }
    render() {
        const imgStyle={
            width:'250px',
            height:'250px'
        }
        return (
            <div>
                <Container className="mt-5"> 
                    <Row>
                    <Col sm={12} md={9} lg={9} className="border mb-3">
                       <Row>
                       <Col sm={12} md={4} lg={4} className="">
                           <img style={imgStyle} src={pro} alt="project" />
                           </Col>
                          
                           <Col sm={12} md={8} lg={8}>
                           <Link to="/jj" style={{colot:""}}>
                           <h4 className="mt-1 text-secondary"> Most Popular Apartments in Al Riyadh <span className="ml-auto">$999</span></h4><br/><br/><br/><br/>
                           <p className=" text-secondary">Most Popular Apartments</p>
                           <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                           <Button variant="outline-warning"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                           <Button variant="outline-success mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                           <Button variant="outline-success"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                           </Link>
                           </Col>
                         
                       </Row>                                                                                                                
                        </Col>

                        <Col sm={12} md={9} lg={9} className="border  mb-3">
                       <Row>
                       <Col sm={12} md={4} lg={4} className="">
                           <img style={imgStyle} src={pro} alt="project" />
                           </Col>
                          
                           <Col sm={12} md={8} lg={8}>
                           <Link to="/jj" style={{colot:""}}>
                           <h4 className="mt-1 text-secondary"> Most Popular Apartments in Al Riyadh <span className="ml-auto">$999</span></h4><br/><br/><br/><br/>
                           <p className=" text-secondary">Most Popular Apartments</p>
                           <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                           <Button variant="outline-warning"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                           <Button variant="outline-success mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                           <Button variant="outline-success"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                           </Link>
                           </Col>
                         
                       </Row>                                                                                                                
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                        
                         <div >
                         <h3>{this.state.aria}</h3>
                           <ProjectSitebar/>
                            
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
