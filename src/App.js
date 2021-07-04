import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/Navbar/NavigationBar';
import HomeImage from './Component/HomeBennar/HomeImage';
import Footer from './Component/Footer/Footer';
import FeaturedProperties from './Component/FeaturedProperties/FeaturedProperties';

function App() {
  return (
    <div >
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavigationBar/>
       <HomeImage/>
      <FeaturedProperties/>
       <Footer/>
    </div>
  );
}

export default App;
