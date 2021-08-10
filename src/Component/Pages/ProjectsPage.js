import React, { Component } from 'react'
import Projects from '../Project/Projects'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
export default class ProjectsPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                 <Projects/>
                 <Footer/> 
            </div>
        )
    }
}
