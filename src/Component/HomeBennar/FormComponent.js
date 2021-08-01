import React, { Component } from 'react'
import { Container,Row,Col,Form,Button, } from 'react-bootstrap'
export default class FormComponent extends Component {
    render() {

        const inputstyle={
            height:' 45px',
           width: '295px',
          //  borderRadius: '10px'
        }
        return (
            <div>

            <Container>
             <Row >
             <Col md={4} className="my-2">
             <input style={inputstyle} type="text" placeholder="Enter proparty location"/>
             </Col>
             <Col md={4} className="my-2">
             <input style={inputstyle} type="text" placeholder="City"/>
             </Col>
              <Col md={4} className="my-2">
            <select style={{width: '205px',height: '45px'}} >
              <option selected>Proparty type</option>
              <option>Residential</option>
               <option>Rent</option>
                <option>Luxury</option>
                 <option>Commartial</option>
                  <option>Recidantial</option>
            </select>
             </Col>
               <Col md={4} g-0>
            <select style={{width: '254px',height: '45px'}}>
              <option selected>Bedrooms</option>
              <option>2</option>
               <option>3</option>
                <option>4</option>
                 <option>5</option>
            </select>
             </Col>
              <Col md={3} className="mx-0">
            <select style={{width: '231px',height: '45px',marginLeft: '-40px'}}>
              <option selected>Bathrooms</option>
              <option>1</option>
               <option>2</option>
                <option>3</option>
                 <option>4</option>
                  <option>5</option>
            </select>
             </Col>
              <Col md={3}>
            <select style={{width: '223px',height: '45px',marginLeft: '-29px'}}>
              <option selected>Proparty price</option>
              <option>$999 -1998</option>
                <option>$999 -1998</option>
                  <option>$999 -1998</option>
                    <option>$999 -1998</option>
                      <option>$999 -1998</option>
            </select>
             </Col>
             <Col  md={2}>
              <button type="submit"style={{height:'45px'}} class="btn btn-warning ml-n4 ">Search</button>
             </Col>
             </Row>
            </Container>
             
            </div>
        )
    }
}
