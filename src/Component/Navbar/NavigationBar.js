import React, { Component,Fragment } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { Link } from 'react-router-dom'
import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from '../Images/GroupLogo.png'
export default class NavigationBar extends Component {
   
    
    render() {
        
        return (
            <Fragment>
               <div className="topheader">
                <Navbar bg="dark" variant="dark"  >
                    <Navbar.Brand href="#home" style={{ marginLeft:'50px'}}>
                        <FontAwesomeIcon className="iconStyle" icon={faFacebook}/>
                        <FontAwesomeIcon className="iconStyle" icon={faTwitter}/>
                        <FontAwesomeIcon className="iconStyle" icon={faLinkedinIn}/>
                        <FontAwesomeIcon  className="iconStyle" icon={faYoutube}/>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text  style={{fontWeight: 900}} className="  text-white mr-5  "><FontAwesomeIcon  className="iconStyle" icon={faPhone}/>
                        (074) 55 55 55 
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Navbar>
                    </div>
             {/* second nav */}
                <Container fluid={true}>
                <Navbar collapseOnSelect  expand="lg" className=" bordeer-bottom" >
                    <Navbar.Brand href="/"><img style={{width:'100px'}} src={logo} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                        <Nav.Link ><strong><Link to="/">Home</Link></strong></Nav.Link>
                        <Nav.Link ><strong><Link to="/aboutus">About Us</Link></strong></Nav.Link>
                        <Nav.Link  ><strong><Link to="/apartment"> Our Project</Link></strong>  </Nav.Link>                                               
                        <Nav.Link  > <strong><Link to="/contactus">Contact Us</Link></strong>  </Nav.Link>
                        </Nav>
                        <Nav>
                        {/* <Nav.Link  > <strong><Link to="/login">Login</Link></strong>  </Nav.Link> */}
                        
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        )
    }
}
