import React, { Component } from 'react'
import {Switch,Route, } from "react-router-dom";
  import HomePage from '../Pages/HomePage'
  import AboutUsPage from '../Pages/AboutUsPage';
import CharmanMsgPage from '../Pages/CharmanMsgPage';
import CeoMessagePage from '../Pages/CeoMessagePage';
import PropartyPage from '../Pages/PropartyPage';
import BordofDirectorPage from '../Pages/BordofDirectorPage';
import ProjectsPage from '../Pages/ProjectsPage';

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
                  <Route path="/project" component={ProjectsPage }/> 
               </Switch>
               
             
           
        )
    }
}

