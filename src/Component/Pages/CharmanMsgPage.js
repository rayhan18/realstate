import React, { Component } from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AbutsUs'
import CharmanMessage from '../AboutUs/CharmanMessage'

export default class CharmanMsgPage extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <CharmanMessage/>
                 <Footer/>
            </div>
        )
    }
}