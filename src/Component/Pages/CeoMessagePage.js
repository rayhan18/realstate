import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import CEOMessage from '../AboutUs/CEOMessage'
export default class CeoMessagePage extends Component {
    render() {
        return (
            <div>
               <NavigationBar/>
                 <CEOMessage/>
                 <Footer/> 
            </div>
        )
    }
}
