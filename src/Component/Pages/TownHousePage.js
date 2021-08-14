import React, { Component } from 'react'

import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import TownHouse from '../TownHouse/TownHouse'

export default class TownHousePage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <TownHouse/>
                 <Footer/> 
            </div>
        )
    }
}
