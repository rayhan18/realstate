import React, { Component } from 'react'

import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import Villa from '../Villa/Villa'
export default class FamilyHousePage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <Villa/>
                 <Footer/> 
            </div>
        )
    }
}
