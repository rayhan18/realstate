import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import BordofDirector from '../AboutUs/BordofDirector'

export default class BordofDirectorPage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <BordofDirector/>
                 <Footer/>
            </div>
        )
    }
}
