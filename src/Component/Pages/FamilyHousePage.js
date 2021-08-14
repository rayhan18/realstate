import React, { Component } from 'react'
import FamilyHouse from '../FamilyHouse/FamilyHouse'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
export default class FamilyHousePage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <FamilyHouse/>
                 <Footer/> 
            </div>
        )
    }
}
