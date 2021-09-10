import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'


export default class Banner2 extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="backImg slideInUp">
                 
                    <Row>

                        <Col sm={12} md={8} lg={8}>
                           <h2 className="benner2Title">WANT TO FIND YOUR PERFECT HOME?</h2>
                           <p className="banner2-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, ex eu cursus viverra, lorem turpis feugiat augue, non viverra ipsum nunc in magna.</p>
                        </Col>
                        <Col sm={12} md={4} lg={4} className="text-center mt-5">
                            <div className="banner2-btn">
                            <Button type="button" className="btn-warning " size-lg ='true'><a href="/">BROWSE PROPERTIES</a></Button>
                            </div>
                       
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
