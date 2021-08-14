import React, { Component } from 'react'

import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'

import Office from '../Office/Office'

export default class OfficePage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <Office/>
                 <Footer/> 
            </div>
        )
    }
}
