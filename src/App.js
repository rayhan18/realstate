import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/Navbar/NavigationBar';
import HomeImage from './Component/HomeBennar/HomeImage';
import Footer from './Component/Footer/Footer';
import FeaturedProperties from './Component/FeaturedProperties/FeaturedProperties';
import PopularPlace from './Component/PopularPlace/PopularPlace';
import BayOrSell from './Component/BayOrSell/BayOrSell';
import Banner2 from './Component/Banner2/Banner2';
import Agent from './Component/Agents/Agent'
function App() {
  return (
    <div >
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavigationBar/>
       <HomeImage/>
      <FeaturedProperties title="Featured Properties" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      <PopularPlace/>
      <BayOrSell/>
      <FeaturedProperties title="Properties For Rent" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Banner2/>
        <Agent/>
       <Footer/>
    </div>
  );
}

export default App;
