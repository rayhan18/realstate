import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Form} from 'react-bootstrap'
 // import HomeBannerImg from '../Images/HomeBennarImg.jpg'
import '../Style/Style.scss'
import FormComponent from './FormComponent'

export default class HomeImage extends Component {
    render() {
        const rowstyle={
           textAlign: 'inherit',
        
           
        }
        return (
            <Fragment>
                <Container fluid={true} className=" slideInUp topBennarimg"> 
                    <div className="">
                        <h1  style={{color:' rgb(208 208 236)'}}className="text-center">FIND YOUR DREAM HOME</h1>
                        <h5 style={{color: '#fff'}} className="text-center">From as low as $100 per day with limited time offer discounts.</h5>
                   
                   
                   <Row className="mt-5 " style={rowstyle}>
                        <Col style={{background: 'rgb(18 7 102 / 28%)', padding: '31px'}}>
                            <div style={{marginLeft: '217px'}}>
                                <h4 className="btn btn-warning mr-2 ">Bay Proparty</h4>
                                <h4 className="btn btn-warning">Rent Proparty</h4>
                            </div>
                            <div style={{marginLeft: '200px', marginRight:' 200px'}}>
                                <FormComponent/>
                            </div>
                        </Col>

                     </Row>
                    </div >
                        <div>
                          
                        

 
 
                        </div>
                    
                </Container>
                
            </Fragment>
        )
    }
}
