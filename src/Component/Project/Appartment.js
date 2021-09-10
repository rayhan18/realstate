import React, { Component } from 'react'
import { Container ,Row,Col,Button} from 'react-bootstrap' 
import pro from '../Images/living5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart, faPhone, faComment} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default class Appartment extends Component {
    
    render() {
        // const imgStyle={
        //     width:'250px',
        //     height:'250px',
        //     border: '5px solid #e8dfdf',
        //     marginTop: '10px',
        // }
        return (
            <div>
             <Container className="mt-5 slideInUp"> 
             <h3 className="text-center bg-info p-2">{this.props.title}</h3>
                <Row >
                    <Col sm={12} md={12} lg={12} className="border mb-3 apartmentrow">
                    <ul className="list-unstyled">
                            <li className="media ">
                              
                                  <Link to="/projectdetails">
                                <img  className='imgStyle 'src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project" />
                                </Link>
                               
                               
                           
                                <div className="media-body ml-3">
                                <h5 className="mt-3 mb-1">Most Popular Apartments in Al Riyadh </h5><br/><br/><br/>
                                <p className=" text-secondary mb-0">Most Popular Apartments</p>
                                   <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                                   <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                                    <Button variant="outline-primary mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                                     <Button variant="outline-primary mx-2"> Price range - $1999.00</Button>

                                </div>
                            </li>

                        </ul>
                      
                    </Col>

                    <Col sm={12} md={12} lg={12} className="border mb-3 apartmentrow">
                    <ul className="list-unstyled">
                            <li className="media">
                            <Link to="/projectdetails">
                                <img className='imgStyle ' src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project" />
                                </Link>
                                <div className="media-body ml-3">
                                <h5 className="mt-3 mb-1">Most Popular Apartments in Al Riyadh </h5><br/><br/><br/>
                                <p className=" text-secondary mb-0">Most Popular Apartments</p>
                                   <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                                   <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                                    <Button variant="outline-primary mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                                     <Button variant="outline-primary mx-2"> Price range - $1999.00</Button>

                                </div>
                            </li>

                        </ul>
                      
                    </Col>
                      
                    <Col sm={12} md={12} lg={12} className="border mb-3 apartmentrow">
                    <ul className="list-unstyled">
                            <li className="media">
                            <Link to="/projectdetails">
                                <img className='imgStyle ' src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project" />
                                </Link>
                                <div className="media-body ml-3">
                                <h5 className="mt-3 mb-1">Most Popular Apartments in Al Riyadh </h5><br/><br/><br/>
                                <p className=" text-secondary mb-0">Most Popular Apartments</p>
                                   <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                                   <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                                    <Button variant="outline-primary mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                                     <Button variant="outline-primary mx-2"> Price range - $1999.00</Button>

                                </div>
                            </li>

                        </ul>
                      
                    </Col>
                    <Col sm={12} md={12} lg={12} className="border mb-3 apartmentrow">
                    <ul className="list-unstyled">
                            <li className="media">
                            <Link to="/projectdetails">
                                <img className='imgStyle ' src={pro} alt="project" />
                                </Link>
                                <div className="media-body ml-3">
                                <h5 className="mt-3 mb-1">Most Popular Apartments in Al Riyadh </h5><br/><br/><br/>
                                <p className=" text-secondary mb-0">Most Popular Apartments</p>
                                   <p className=" text-secondary">Apartment for rent | 3 Bedrooms | 2 Bathrooms | New Bulding</p>
                                   <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faHeart}/>Add to favorites</Button>
                                    <Button variant="outline-primary mx-2"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faPhone}/>Call</Button>
                                    <Button variant="outline-primary"><FontAwesomeIcon className="flip-2-ver-left-fwd text-danger" icon={faComment}/>Chat</Button>
                                     <Button variant="outline-primary mx-2"> Price range - $1999.00</Button>

                                </div>
                            </li>

                        </ul>
                      
                    </Col>
                </Row>
            </Container>
     </div>
        )
    }
}
