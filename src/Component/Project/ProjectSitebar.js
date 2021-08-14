import React, { Component } from 'react'
import { Dropdown, Container,Row,Col} from 'react-bootstrap'
import pro from '../Images/living5.jpg'
import pro2 from '../Images/living4.jpg'
import pro3 from '../Images/living3.jpg'
import pro4 from '../Images/living2.jpg'
import Slider from "react-slick";
export default class ProjectSitebar extends Component {
    constructor(){
        super()
        this.state={
            aria:"Apartments for Rent in Al Riyadh"
        }
    }
    render() {
        
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:5000,
          };
       const imgStyle={
           width:'100%',
           height:'250px',
       }
        return (
            <div>

                <Container className="mt-5">
                  <h5 className=" p-2 bg-primary" >{this.state.aria}</h5>
                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle id="dropdown-autoclose-false " className="btn-block">
                   Aria
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{width:'220px'}}>
                    <Dropdown.Item href="#">Al Khaleej</Dropdown.Item>
                    <Dropdown.Item href="#">Al Malaz</Dropdown.Item>
                    <Dropdown.Item href="#">Al rimal</Dropdown.Item>
                    <Dropdown.Item href="#">Al Khaleej</Dropdown.Item>
                    <Dropdown.Item href="#">Al Malaz</Dropdown.Item>
                    <Dropdown.Item href="#">Al rimal</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
              
           </Container>
           <Container className="mt-4">
               <h4 className="bg-warning p-2 text-center pulsate-fwd">Comming soon</h4>
               <Row>
                    <Col sm={12} md={12} lg={12} className="border p-2 my-3">

                    <div>
        
                                <Slider {...settings}>
                                <div>
                                    <img style={imgStyle} src={pro} alt="apartment" />
                                </div>
                                <div>
                                    <img style={imgStyle} src={pro2}  alt="apartment"/>
                                </div>
                                <div>
                                    <img style={imgStyle} src={pro3} alt="apartment" />
                                </div>
                                <div>
                                    <img style={imgStyle} src={pro4} alt="apartment"/>
                                </div>
                                </Slider>
                     </div>
                      
                    </Col>
                </Row>
           </Container>
            </div>
        )
    }
}
