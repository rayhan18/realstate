import React, { Component } from 'react' 
import { Container,Row,Col } from 'react-bootstrap'
import man2 from '../Images/man2.jpg'
import '../Style/Responsive.css'
export default class CharmanMessage extends Component {
    render() {
        
       
        
        return (
            <div >
                <Container className="mt-5 slideInUp">
                
                    <h3 className=" charmanstyle text-white p-2">Chairman’s Message</h3><hr/>
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
                 






                   
                   
                </Container>
                <Container>
                    <Row>
                        <Col sm={12} md={3} lg={3}>
                        <figure >
                        <img  className="imgStyle" src={man2} alt="charman"/>
                        <figcaption>
                        <h5 className="charmantitle w-100">Abdulmohsen R. Al-Rashed</h5>
                        {/* <p className="text-center charmantitle" >Chairman</p> */}
                        </figcaption>
                       
                    </figure>
                        </Col>
                        <Col sm={12} md={9} lg={9}>
                        <div className="charmanText">
                        <p className="mt-3 ml-5">
                        Since its inception, DremHill Real Estate Company has adopted 
                    a clear vision based on the development of quality residential 
                    units designed to enrich the life style and enhance the way of
                     life of the people of the Kingdom for generations to come. 
                     DremHill is committed to this mission and has worked tirelessly 
                     to achieve the goals and vision through adherence to International 
                     standards in the implementation of real estate projects and 
                    the integration between modernity and traditional character.
                        </p>
                        <p className="mt-3 ml-5">
                        Since its inception, DremHill Real Estate Company has adopted 
                    a clear vision based on the development of quality residential 
                    units designed to enrich the life style and enhance the way of
                     life of the people of the Kingdom for generations to come. 
                     DremHill is committed to this mission and has worked tirelessly 
                     to achieve the goals and vision through adherence to International 
                     standards in the implementation of real estate projects and 
                    the integration between modernity and traditional character.
                        </p><hr/>
                    </div>
                 
                        </Col>
                      
                    </Row>
                   
                </Container>
                <div className=" charmanstyle"> </div>
              
            </div>
        )
    }
}
