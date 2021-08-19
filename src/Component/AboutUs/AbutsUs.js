import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SitebarAboutus from '../AboutUs/SitebarAboutus'
import homeimg2 from '../Images/homeimg2.jpg'

export default class AbutsUs extends Component {
    
    render() {
        const headingstyle={
            background:'#8084f266',
            padding:'10px'
        }
        return (
            <Fragment>
                <Container className="mt-4 slideInUp">
                    <Row>
                        <Col sm={12}md={3} lg={3}>
                           <SitebarAboutus/>
                        </Col>
                        <Col sm={12}md={9} lg={9}>
                        <h3 style={headingstyle}>Motivated by inspiration</h3><hr/>
                            <img className="mb-3" style={{height:'200px', width:'100%'}} src={homeimg2 } alt="banner"/><hr/>
                      
                        <p>
                      <span style={{color:'tomato'}}> DremHill </span> Real Estate Company was established to fulfil the need for high quality, modern residential and commercial real estate in the Kingdom of Saudi Arabia’s booming Eastern Province.
                        </p>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu 
                         </p>
                         <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu 
                         </p>
                         <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu 
                         </p>

                         <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu 
                         </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
