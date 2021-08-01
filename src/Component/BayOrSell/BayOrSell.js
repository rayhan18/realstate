import React, { Component } from 'react'
import { Container,Button ,Row,Col} from 'react-bootstrap'
import ProductSlider from './ProductSlider'

export default class BayOrSell extends Component {





    render() {
        const colbaysell={
            background: '#546e7b47',
            padding:' 18px',
            paddingBottom:' 35px'
        }
        return (
            <div>
                <Container fluid={true} className="fucherbgimg slideInUp">
                    <Row>
                        <Col style={colbaysell} sm={12} md={8} lg={8}>
                        <div className="text-center   fuchearHeading">
                          <div style={{background: '#06416552'}}>

                             <svg viewBox="0 0 1320 300">
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Buy or sell your house
                            </text>
                           </svg>	
                         </div><hr/>

                        {/* <h2 className=" display-4">Buy or sell your house</h2> */}
                        <p style={{color: 'whitesmoke'}}>Donec placerat dolor id neque pretium placerat. Donec in facilisis risus. In sollicitudin magna luctus sem ultrices convallis. Sed quis ex vel tellus ullamcorper malesuada. Aenean facilisis ex dolor, id vehicula nisl consectetur dapibus. Phasellus mollis mauris semper placerat convallis. Morbi varius facilisis dignissim. Donec eu sollicitudin nunc. Aliquam in nisi id arcu gravida vehicula quis nec sapien. Fusce at dolor ex.</p>
                        <Button variant="warning mr-3">Start Search Now</Button>
                        <Button variant="warning">Brows Proparties</Button>
                    </div>
                        </Col>
                        <Col sm={12} md={3} lg={3} className="border mt-5">
                        <ProductSlider/>
                        </Col>
                        <Col sm={1} md={1} lg={1}>
                       
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}

