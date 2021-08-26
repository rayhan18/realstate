import React, { Component } from 'react'
import { Row,Col,Container,Figure } from 'react-bootstrap'

import HomeImage1 from '../Images/ismael.jpg'
import HomeImage2 from '../Images/izuddin.jpg'
import HomeImage3 from '../Images/lightscape.jpg'
import HomeImage4 from '../Images/pedrolastra.jpg'
import HomeImage5 from '../Images/pexels.jpg'
import HomeImage6 from '../Images/pexelspeng.jpg'
export default class PopularPlace extends Component {
    render() {
        return (
            <div>
                <Container className="slideInUp">
                    <div className="text-center p-3">
                    <h1> POPULAR PLACES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    
                <Row>
                    <Col sm={12} md={6} lg={8}>
                    <div class="grid">
					<Figure class="effect-layla">
                       <img src={HomeImage1} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                    </Col>
                    <Col sm={4} md={6} lg={4}>
                    
                    <div class="grid">
					<Figure class="effect-layla" style={{height: '250px'}}>
                       <img src={HomeImage2} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Rocxi</span></h2>
							<p>When Layla appears</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                    <div class="grid">
					<Figure class="effect-layla"  style={{height: '250px'}}>
                       <img src={HomeImage3} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Shipo</span></h2>
							<p>When Layla appears</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                   
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                   <div class="grid">
					<Figure class="effect-layla" style={{height: '250px'}}>
                       <img src={HomeImage4} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Phaddma</span></h2>
							<p>When Layla appears</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                   
                    <div class="grid">
					<Figure class="effect-layla" style={{height: '250px'}}>
                       <img src={HomeImage5} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Hilsa</span></h2>
							<p>When Layla appears</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                   
                    <div class="grid">
					<Figure class="effect-layla" style={{height: '250px'}}>
                       <img src={HomeImage6} style={{width: '100%'}} alt=" california"/>
                        <Figure.Caption className="figcaption">
							<h2>Crazy <span>:Lilli</span></h2>
							<p>When Layla appears</p>
							<a href="/">View more</a>
                            </Figure.Caption>		
					</Figure>
                    
                    </div>
                    </Col>
                </Row>
                </Container>
                
            </div>
        )
    }
}
