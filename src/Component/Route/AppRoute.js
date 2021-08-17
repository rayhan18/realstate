import React, { Component } from 'react'
import {Switch,Route, } from "react-router-dom";
  import HomePage from '../Pages/HomePage'
  import AboutUsPage from '../Pages/AboutUsPage';
import CharmanMsgPage from '../Pages/CharmanMsgPage';
import CeoMessagePage from '../Pages/CeoMessagePage';
import PropartyPage from '../Pages/PropartyPage';
import BordofDirectorPage from '../Pages/BordofDirectorPage';
import ProjectsPage from '../Pages/ProjectsPage';
import FamilyHousePage from '../Pages/FamilyHousePage';
import MordanvillaPage from '../Pages/MordanvillaPage'
import VillaPage from '../Pages/VillaPage'
import TownHousePage from '../Pages/TownHousePage';
import OfficePage from '../Pages/OfficePage';
import ProjectDitailsPage from '../Pages/ProjectDitailsPage'
import ContactusPage from '../Pages/ContactusPage';
export default class AppRoute extends Component {
    render() {
        return (
            
            
                <Switch>
                   <Route exact path="/" component={HomePage}/> 
                  <Route path="/aboutus" component={AboutUsPage }/> 
                  <Route path="/charmanmsg" component={CharmanMsgPage }/> 
                  <Route path="/ceomessage" component={CeoMessagePage }/> 
                  <Route path="/proparty" component={PropartyPage }/> 
                  <Route path="/bordofdirector" component={BordofDirectorPage }/> 
                  <Route path="/apartment" component={ProjectsPage }/> 
                  <Route path="/familyhouse" component={FamilyHousePage }/>
                  <Route path="/mordanvilla" component={MordanvillaPage}/>
                  <Route path="/villa" component={VillaPage}/>
                  <Route path="/townhouse" component={TownHousePage}/>
                  <Route path="/office" component={OfficePage}/>
                  <Route path="/contactus" component={ContactusPage}/>
                  <Route path="/projectdetails" component={ProjectDitailsPage}/>
               </Switch>
               
             
           
        )
    }
}

