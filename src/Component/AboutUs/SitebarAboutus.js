import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default class SitebarAboutus extends Component {
    constructor(){
        super()
        this.state={
            activeColor:true,
            bgColor:'aboutItem'
        }
        this.colorset=this.colorset.bind(this)
    }

    colorset(){
       
        if(!this.state.activeColor){
            this.setState({activeColor:this.state.bgColor})
        }else{
            this.setState({activeColor:true})
        }
    }
    render() {
        const headingstyle={
            background:'#8084f266',
            padding:'10px'
        }
        return (
            <div>
                 <h3 style={headingstyle}>About Us</h3><hr/>
                        <div>
                          <Link to= "#" onClick={this.colorset} > <h5 className="mb-3 p-2 aboutItem "><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span>
                             Brif's</h5></Link>
                             <Link onClick={this.colorset} to="/charmanmsg"> <h5 className="mb-3  p-2 aboutItem"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Chairman’s Message</h5></Link>
                             <a href="/">  <h5 className="mb-3  p-2 aboutItem"> <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> CEO’s Message</h5></a>
                             <a href="/"> <h5 className="mb-3  p-2 aboutItem"> <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Objectives</h5></a>
                             <a href="/"> <h5 className="mb-3  p-2 aboutItem"> <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Board of Directors</h5></a>
                             <a href="/"> <h5 className="mb-3  p-2 aboutItem"> <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Organizational Structure</h5></a>
                            
                        </div>
            </div>
        )
    }
}
