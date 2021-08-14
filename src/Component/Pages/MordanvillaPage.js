import React, { Component } from 'react'

import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import Mordanvilla from '../Mordanvilla/Mordanvilla'
export default class FamilyHousePage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <Mordanvilla/>
                 <Footer/> 
            </div>
        )
    }
}
