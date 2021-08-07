import React, { Component } from 'react'
import { Container,Row,Col,Form ,InputGroup,Dropdown,Button,
Navbar,NavDropdown,Nav} from 'react-bootstrap'
import PropartyItem from './PropartyItem'

export default class Proparty extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={3} lg={3}>
                        <Form>
                            <InputGroup>
                            <input type="text" placeholder="keyword"/>
                            </InputGroup>
                       
                            <InputGroup>
                            <input type="text" placeholder="keyword"/>
                            </InputGroup>
                            <div className="d-grid ">
                                <select className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                </div>
                             <div className="d-grid ">
                                <select className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                </div>
                                <div className="d-grid ">
                                <select className="form-select" aria-label="Default select example">
                                <option selected>Bathrooms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                                </div>
                               
                                   
                                   <h4>Advanced Features</h4>
                                   <Dropdown>
                                        <Dropdown.Toggle id="dropdown-example1" variant="secondary">
                                        Advanced Features
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1" active>
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                   <div className="d-grid ">
                                        <Button variant="primary" >
                                           Search
                                        </Button>
                                    </div>
                            </Form>
                        </Col>
                        <Col sm={12} md={9} lg={9}>
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
