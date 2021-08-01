import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import living1 from '../Images/living1.jpg'
import living2 from '../Images/living2.jpg'
import living3 from '../Images/living3.jpg'
import living4 from '../Images/living4.jpg'
import living5 from '../Images/living5.jpg'
import living6 from '../Images/living6.jpg'
export default class ProductSlider extends Component {
    render() {
        const imgsize={
            width:' 100%',
            height: '340px',
            overflow: 'hidden',
            marginTop:'20px'
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight:true,
            arrows:false,
            autoplay:true,
            autoplaySpeed:2000,
          };
        return (
            <div>
               
               <Slider {...settings}>
          <div>
            <img style={imgsize} src={living1} alt="house"/>
          </div>
          <div>
          <img style={imgsize} src={living2} alt="house"/>
          </div>
          <div>
          <img style={imgsize} src={living3} alt="house"/>
          </div>
          <div>
          <img style={imgsize} src={living4} alt="house"/>
          </div>
          <div>
          <img style={imgsize} src={living5} alt="house"/>
          </div>
          <div>
          <img style={imgsize} src={living6} alt="house"/>
          </div>
        </Slider>
      </div>
              
     
            
        )
    }
}
