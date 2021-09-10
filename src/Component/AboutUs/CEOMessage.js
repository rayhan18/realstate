import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import man1 from '../Images/man1.jpg'
import SitebarAboutus from '../AboutUs/SitebarAboutus'
export default class CEOMessage extends Component {
    render() {
        const imgStyle={
            width:'300px',
            height:' 300px',
            border:' 15px solid #c5bdbd',
        }
        
        
        return (
            <div >
                <Container className="mt-5 bgimg slideInUp ">
                 <Row>
                     <Col sm={12}md={3} lg={3}>
                      <SitebarAboutus/>
                     </Col>
                     <Col sm={12}md={9} lg={9}>
                     <h3 className=" charmanstyle text-white p-2">CEO'S Message</h3><hr/>
                    <p className="fst-italic">
                    Since its inception, DremHill Real Estate Company has adopted 
                    a clear vision based on the development of quality residential 
                    units designed to enrich the life style and enhance the way of
                     life of the people of the Kingdom for generations to come. 
                     DremHill is committed to this mission and has worked tirelessly 
                     to achieve the goals and vision through adherence to International 
                     standards in the implementation of real estate projects and 
                    the integration between modernity and traditional character.
                    </p>
                    <div className=" charmanstyle"> </div>
                    <div className="text-center mt-5 ">
                        
                    <figure>
                        <img  style={imgStyle} src={man1} alt="charman"/>
                        <figcaption>
                        <h3 className="" style={{color:' #050361',
                                fontWeight: 'bold'}}>Homaira Binbin</h3>
                        <p className="" style={{color:' #050361',
                            fontWeight: 'bold'}}>CEO</p>
                        </figcaption>
                       
                    </figure>
                    </div>
                    <div>
                        <p className="mt-3">
                        Since its inception, DremHill Real Estate Company has adopted 
                    a clear vision based on the development of quality residential 
                    units designed to enrich the life style and enhance the way of
                     life of the people of the Kingdom for generations to come. 
                     DremHill is committed to this mission and has worked tirelessly 
                     to achieve the goals and vision through adherence to International 
                     standards in the implementation of real estate projects and 
                    the integration between modernity and traditional character.
                        </p>
                    </div>
                     </Col>
                 </Row>   
                </Container>
            </div>
        )
    }
}
