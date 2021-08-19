import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import man2 from '../Images/man2.jpg'
export default class CharmanMessage extends Component {
    render() {
        const imgStyle={
            width:'300px',
            height:'300px'
        }
        
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
                    <div className=" charmanstyle"> </div>
                    <div className="text-center mt-5 frame">
                        
                    <figure>
                        <img id="imgborder" style={imgStyle} src={man2} alt="charman"/>
                        <figcaption>
                        <h3 className="" style={{color:' #050361',
    fontWeight: 'bold'}}>Abdulmohsen R. Al-Rashed</h3>
                        <p className="" style={{color:' #050361',
    fontWeight: 'bold'}}>Chairman</p>
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
                </Container>
            </div>
        )
    }
}
