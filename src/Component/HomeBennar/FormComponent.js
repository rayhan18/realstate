import React, { Component } from 'react'
import { Container,Row,Col,Form ,Button,} from 'react-bootstrap'
import '../Style/Responsive.css'
export default class FormComponent extends Component {
    render() {

        
        return (
            <div>

           
            
            <Form>
                    <Row className="">
                      <Form.Group as={Col} controlId="formGridEmail">
                    
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                      
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridState">
                      <Form.Group as={Col}  controlId="formGridState">
                      <select className="form-control" >
                      <option selected>Residential</option>
               <option>Rent</option>
                <option>Luxury</option>
                 <option>Commartial</option>
                  <option>Recidantial</option>
                      </select>  
                      </Form.Group>
                      </Form.Group>

                    </Row>

 

                        <Row className="mb-1" >
                        <Form.Group as={Col} controlId="formGridEmail">
                    
                        <select className="form-control" >
                          <option selected>Bedrooms</option>
              <option>2</option>
               <option>3</option>
                <option>4</option>
                 <option>5</option>
                          </select>  
                  </Form.Group>

                          <Form.Group as={Col}  controlId="formGridState">
                          <select className="form-control" >
                          <option selected>Bathrooms</option>
              <option>1</option>
               <option>2</option>
                <option>3</option>
                 <option>4</option>
                  <option>5</option>
                          </select>  
                          </Form.Group>

    
    
                              <Form.Group as={Col}  controlId="formGridState">
                              <select className="form-control" >
                              <option  selected>Proparty price</option>
              <option>$999 -1998</option>
                <option>$999 -1998</option>
                  <option>$999 -1998</option>
                    <option>$999 -1998</option>
                      <option>$999 -1998</option>
                              </select>  
                              </Form.Group>
                            
                            </Row>

  

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                        
            </div>
        )
    }
}
