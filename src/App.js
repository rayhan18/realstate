import React from 'react'

import { BrowserRouter} from 'react-router-dom'
import './Component/Style/Responsive.css'
import AppRoute from './Component/Route/AppRoute'
function App() {
  return (
    <div>
      <BrowserRouter >
     {/* <HomePage/> */}
         <AppRoute/>
     {/* <AboutUsPage/> */}
       
    </BrowserRouter>
    </div>
    
  );
}

export default App;
