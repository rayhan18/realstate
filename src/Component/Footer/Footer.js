
import React, { Component,Fragment } from 'react'
import { Container,Row,Col, Button,Media} from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow ,faEnvelope,faPhoneSquare,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faTwitter,faInstagramSquare, faYoutube}from '@fortawesome/free-brands-svg-icons'
import '../Style/Style.scss'
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fottercontain">
                    <Container className=" p-3">
                    <Row className= "mt-5">
                        <Col xs={12} sm={12} md={4}lg={4}>
                        <img style={{width: '100px'}} src={charts}alt="logo"/>
                         <p className="text-white"> Lorem ipsum dolor sit amet, consectetur 
                             adipiscing elit. Aenean urna magna,
                              mattis at ullamcorper in, pharetra in lorem.
                               Etiam mollis.</p>
                               <Button variant="warning">READ MORE</Button>{' '}
                        </Col>
                        <Col xs={12} sm={12} md={2}lg={2}>
                        <div>
                            <h3 className="text-white border-bottom">Quick Links</h3>
                           <p ><a className="text-white " href="/"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span>Home </a></p> 
                           <p><a className="text-white" href="/"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Propartice</a></p> 
                           <p><a className="text-white" href="/"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span>Agent</a></p> 
                           <p><a className="text-white"href="/"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Block</a></p> 
                           <p><a className="text-white" href="/"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Contact Us</a></p> 
                        </div>
                         
                        </Col>
                        <Col xs={12} sm={12} md={3}lg={3}>
                        <div>
                            <h3 className="text-white border-bottom">Recent Properties</h3>
                            <Media>
                                <img  width={64}
                                    height={64}
                                    className="mr-3"style={{width: '100px'}} src={charts}alt="logo"/>
                                
                            <Media.Body>   
                                <p className="text-white">
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque                               
                                </p>
                            </Media.Body>
                            </Media><hr/>
                            <Media>
                                <img  width={64}
                                    height={64}
                                    className="mr-3"style={{width: '100px'}} src={charts}alt="logo"/>
                                
                            <Media.Body>   
                                <p className="ml-n1 text-white">
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque                               
                                </p>
                            </Media.Body>
                            </Media>

                        </div>
                         
                        </Col>
                        <Col xs={12} sm={12} md={2}lg={3}>
                        <div>
                            <h3 className="text-white border-bottom">Contact Info</h3>
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faLocationArrow}/></span> 123 Lorem Ipsum, 45 sit Atlanta</p> 
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faEnvelope}/></span> info@reales.com</p> 
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faPhoneSquare}/></span> +0555555555</p> 
                             {/* <p className="text-white"><span className="socialLink"> */}
                              <a href="/" className="socialLink"> <FontAwesomeIcon icon={faFacebookSquare}/></a>
                              <a href="/" className="socialLink"> <FontAwesomeIcon icon={faTwitter}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faInstagramSquare}/></a>
                              <a href ="/" className="socialLink"> <FontAwesomeIcon icon={faYoutube}/></a>
                               {/* </span> */}
                           
                           {/* </p> */}
                        </div>
                         
                        </Col>
                    </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}

