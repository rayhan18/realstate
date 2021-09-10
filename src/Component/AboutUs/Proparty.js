import React, { Component } from 'react'
import { Container,Row,Col,Form ,InputGroup,Button,
Navbar,NavDropdown,Nav,} from 'react-bootstrap'
import PropartyItem from './PropartyItem'
import {Link} from 'react-router-dom'
import proparty from "../Images/living2.jpg"
export default class Proparty extends Component {

    render() {
        const inputStyle={
            width: '100%',
            height:' 45px',
            padding: ' 5px',
            margin: '10px 0px',
            borderRadius: '5px'
        }
        // left site bar
        return (
            <div>
                <Container className="slideInUp">
                    <Row>
                        <Col sm={12} md={6} lg={3} >
                        <Form  className=" border border-warning p-2">
                            <InputGroup>
                            <input style={inputStyle} type="text" placeholder="keyword"/>
                            </InputGroup>
                       
                            <InputGroup>
                            <input style={inputStyle} type="text" placeholder="Location"/>
                            </InputGroup>
                            <div className="d-grid " >
                                <select style={inputStyle} className="form-select" aria-label="Default select example">
                                <option selected>Proparty status</option>
                                <option value="1">For Rent</option>
                                <option value="2">For sale</option>
                               <option value="3">For Quater</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select style={inputStyle} className="form-select" aria-label="Default select example">
                                <option selected>Propaty Tipe</option>
                                <option value="1">Residential</option>
                                <option value="2">Commarcial</option>
                                <option value="3">Luxuary</option>
                                <option value="3">Lend</option>
                                </select>
                                </div>
                             <div className="d-grid ">
                                <select style={inputStyle} className="form-select" aria-label="Default select example">
                                <option selected>Price</option>
                                <option value="1">$999 - $1999</option>
                                <option value="2">$1999 - $2999</option>
                                <option value="3">$2999 - $3999</option>
                                <option value="3">$3999 - $4999</option>
                                <option value="3">$4999 - $5999</option>
                                <option value="3">$5999 - $6999</option>
                                <option value="3">$6999 - $8999</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select style={inputStyle} className="form-select" aria-label="Default select example">
                                <option selected>Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select style={inputStyle} className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                </select>
                                </div>
                                <InputGroup>
                            <input style={inputStyle} type="text" placeholder="Max aria"/>
                            </InputGroup>
 
                                   <h4>Advanced Features</h4>
                                   
                                   
                                        <Button variant="warning btn-block">Search Your Drem </Button>
                                        
                                  
                            </Form>
                            
                            <div className=" border border-warning p-2 mt-5">
                                <h3 className=" border-bottom p-1 text-center text-white bg-warning">Categorice</h3>
                                <div className="d-flex  border-bottom ">
                                  <h5 className="p-1"><Link to="/">Apartement</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                                <div className="d-flex border-bottom">
                                <h5 className="p-1"><Link to="/">Vila</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                               <div className="d-flex  border-bottom">
                               <h5 className="p-1"><Link to="/">Family House</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                               <div className="d-flex  border-bottom">
                               <h5 className="p-1"><Link to="/">Office</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                               <div className="d-flex  border-bottom">
                               <h5 className="p-1"><Link to="/">Mordarn Vila</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                               <div className="d-flex  ">
                               <h5 className="p-1"><Link to="/">Town House</Link></h5> 
                                  <h5 className="ml-auto p-1 text-warning">15</h5>
                               </div>
                            </div>
                            {/* //Recents Property */}
                            <div className=" mt-5 p-2 border border-warning">
                                <h5 className="text-center bg-warning p-2 text-white">Recents Property</h5>
                                <div className="d-flex  p-2 border-bottom ">
                                 <img style={{width:'100px',height:'100px'}} src={proparty} alt="proparty"/>
                                 <p className="ml-2">
                                     Tennessee Road <br/>
                                    Minneapolis, MN 55402<br/>
                                    <Button className="btn-warning" size="sm">$999</Button>
                                 </p>
                                </div>
                                <div className="d-flex  p-2 border-bottom">
                                 <img style={{width:'100px',height:'100px'}} src={proparty} alt="proparty"/>
                                 <p className="ml-2">
                                     Tennessee Road <br/>
                                    Minneapolis, MN 55402<br/>
                                    <Button className="btn-warning" size="sm">$999</Button>
                                 </p>
                                </div>
                            </div>
                        </Col>

                        {/* //write site colam */}
                        <Col sm={12} md={6} lg={9}>
                            {/* //nav bar */}
                        <Navbar className="border border-warning" bg="light" expand="lg">
                            <Container>
                                <Navbar.Brand href="#home">
                                   
                                    <svg viewBox="0 0 1320 300">
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                 BUY YOUE DREM
                                </text>
                                </svg>	
                                    
                                
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    {/* <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link> */}
                                    <NavDropdown title="Best Proparties" id="basic-nav-dropdown">
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.1">low to high price</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">High to low price</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Sell Proparties</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Rent Propartice</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                            </Navbar>


                                    <PropartyItem/>


                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
