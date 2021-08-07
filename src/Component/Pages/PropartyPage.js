import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import Proparty from '../AboutUs/Proparty'
export default class PropartyPage extends Component {
    render() {
        return (
            <div>
               <NavigationBar/>
                 <Proparty/>
                 <Footer/> 
            </div>
        )
    }
}