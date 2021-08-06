import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AbutsUs'
export default class AboutUsPage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <AboutUs/>
                 <Footer/>
            </div>
        )
    }
}
