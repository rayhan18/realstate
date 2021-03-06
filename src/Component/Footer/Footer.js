
import React, { Component,Fragment } from 'react'
import { Container,Row,Col, Button,Media} from 'react-bootstrap'
import charts from '../Images/Logo.png'
import living2 from '../Images/living2.jpg'
import living3 from '../Images/living3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow ,faEnvelope,faPhoneSquare,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faTwitter,faInstagramSquare, faYoutube}from '@fortawesome/free-brands-svg-icons'
import '../Style/Style.scss'
import '../Style/Responsive.css'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fottercontain slideInUp">
                    <Container className=" p-3">
                    <Row className= "mt-5">
                        <Col xs={12} sm={6} md={6}lg={3}>
                        <img className="fotterimg" style={{width: '18rem',marginLeft:'-2rem'}} src={charts}alt="logo"/>
                         <p className="text-white"> Lorem ipsum dolor sit amet, consectetur 
                             adipiscing elit. Aenean urna magna,
                              mattis at ullamcorper in, pharetra in lorem.
                               Etiam mollis.</p>
                               <Button variant="warning"><Link to="/aboutus">READ MORE</Link></Button>{' '}
                        </Col>
                        <Col xs={12} sm={6} md={6}lg={3}>
                        <div>
                            <h3 className="text-white border-bottom">Quick Links</h3>
                           <p className="" ><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> <Link className="text-white qlink" to="/">Home </Link></p> 
                           <p><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span><Link className="text-white qlink" to="/apartment"> Propartice</Link></p> 
                           <p><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span><Link className="text-white qlink" to="/"> Agent</Link></p> 
                           <p><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span><Link className="text-white qlink"  to="/"> Block</Link></p> 
                           <p><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> <Link className="text-white qlink" to="/contactus">Contact Us</Link></p> 
                        </div>
                         
                        </Col>
                        <Col xs={12} sm={6} md={6}lg={3}>
                        <div>
                            <h3 className="text-white border-bottom">Recent Properties</h3>
                            <Media>
                                <img  width={64}
                                    height={64}
                                    className="mr-3"style={{width: '100px'}} src={living2}alt="logo"/>
                                
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
                                    className="mr-3"style={{width: '100px'}} src={living3}alt="logo"/>
                                
                            <Media.Body>   
                                <p className="ml-n1 text-white">
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque                               
                                </p>
                            </Media.Body>
                            </Media>

                        </div>
                         
                        </Col>
                        <Col xs={12} sm={6} md={6}lg={3}>
                        <div>
                            <h3 className="text-white border-bottom">Contact Info</h3>
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faLocationArrow}/></span> 123 Lorem Ipsum, 45 sit Atlanta</p> 
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faEnvelope}/></span> info@reales.com</p> 
                           <p className="text-white"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faPhoneSquare}/></span> +0555555555</p> 
                             {/* <p className="text-white"><span className="socialLink"> */}
                              <Link to="/" className="socialLink"> <FontAwesomeIcon className="" icon={faFacebookSquare}/></Link>
                              <Link to="/" className="socialLink"> <FontAwesomeIcon icon={faTwitter}/></Link>
                              <Link to ="/" className="socialLink"> <FontAwesomeIcon icon={faInstagramSquare}/></Link>
                              <Link to ="/" className="socialLink"> <FontAwesomeIcon icon={faYoutube}/></Link>
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

