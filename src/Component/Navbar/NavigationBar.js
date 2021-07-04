import React, { Component,Fragment } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

export default class NavigationBar extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Navbar>
                </Container>
             {/* second nav */}
                <Container fluid={true}>
                <Navbar collapseOnSelect expand="lg" className=" bordeer-bottom">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features"><strong>Home</strong></Nav.Link>
                        <Nav.Link href="#features"><strong>About Us</strong></Nav.Link>
                        <Nav.Link  href="#memes"><strong> Our Project</strong>  </Nav.Link>
                        <Nav.Link  href="#memes"> <strong>Media center</strong>  </Nav.Link>
                        <Nav.Link  href="#memes"> <strong>Coustomer Service</strong>  </Nav.Link>
                        
                        
                        </Nav>
                        {/* <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes"> Our Project  </Nav.Link>
                        <Nav.Link eventKey={3} href="#memes"> Media center  </Nav.Link>
                        <Nav.Link eventKey={4} href="#memes"> Coustomer Service  </Nav.Link>
                        
                        </Nav> */}
                    </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        )
    }
}
