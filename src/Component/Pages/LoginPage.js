import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'

import Login from '../Login/Login'
export default class LoginPage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <Login/>
                 <Footer/>
            </div>
        )
    }
}
