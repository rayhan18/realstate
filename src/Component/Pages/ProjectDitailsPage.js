import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import ProjectDitainls from '../Project/ProjectDitainls'
import HomeImgage from '../HomeBennar/HomeImage'
export default class ProjectDitailsPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HomeImgage/>
                 <ProjectDitainls/>
                 <Footer/> 
            </div>
        )
    }
}
