import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
 // import HomeBannerImg from '../Images/HomeBennarImg.jpg'
import '../Style/Style.scss'

export default class HomeImage extends Component {
    render() {
        // const bgimg={
        //     backgroundImage:`url(${HomeBannerImg})`,
        //     backgroundRepeat:'no-repid',
           
        //     // height:'600px',
        //     // bakgroundSize:'cover'
           
        // }
        return (
            <Fragment>
                <Container fluid={true} className="topBennarimg">
                    <div className="topBennarheding">
                        <h1 style={{color:' rgb(208 208 236)'}}>FIND YOUR DREAM HOME</h1>
                        <h5 style={{color: '#fff'}}>From as low as $100 per day with limited time offer discounts.</h5>
                   <div>
                        <div >
                            <div>

                            </div>
                        </div>
                 
                 
  
  
                     </div>
                    </div >
                        <div>
                          
                        

 
 
                        </div>
                    
                </Container>
                
            </Fragment>
        )
    }
}
