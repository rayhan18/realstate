import React,{Component} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navbar/NavigationBar';
import HomeImage from '../HomeBennar/HomeImage';
import Footer from '../Footer/Footer';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import PopularPlace from '../PopularPlace/PopularPlace';
import BayOrSell from '../BayOrSell/BayOrSell';
import Banner2 from '../Banner2/Banner2';
import Agent from '../Agents/Agent'

class Homepage extends Component{
  render(){
    return(
      <div >
     
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <NavigationBar/>
     <HomeImage/>
    <FeaturedProperties title="Featured Properties" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <PopularPlace/>
    <BayOrSell/>
    <FeaturedProperties title="Properties For Rent" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      <Banner2/>
      <Agent title="Meet Our Agents" subTitle="Lorem ipsum dolor sit amet consectetur"/>
     <Footer/>
  </div>
    )
  }
}
export default Homepage;
