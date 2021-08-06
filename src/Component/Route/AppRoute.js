import React, { Component } from 'react'
import {Switch,Route, } from "react-router-dom";
  import HomePage from '../Pages/HomePage'
  import AboutUsPage from '../Pages/AboutUsPage';
import CharmanMsgPage from '../Pages/CharmanMsgPage';
export default class AppRoute extends Component {
    render() {
        return (
            
            
                <Switch>
                   <Route exact path="/" component={HomePage}/> 
                  <Route path="/aboutus" component={AboutUsPage }/> 
                  <Route path="/charmanmsg" component={CharmanMsgPage }/> 
               </Switch>
               
             
           
        )
    }
}

