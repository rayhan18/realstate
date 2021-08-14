import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'

import Contactus from '../Contactus/Contactus'

export default class ContactusPage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <Contactus/>
                 <Footer/>
            </div>
        )
    }
}