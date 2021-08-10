import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default class SitebarAboutus extends Component {
    

    
    render() {
        const headingstyle={
            background:'#8084f266',
            padding:'10px'
        }
        return (
            <div>
                 <h3 style={headingstyle}>About Us</h3><hr/>
                        <div>
                          <Link to= "#"  > <h5  className="aboutItem"><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span>
                             Brif's</h5></Link>



                             <Link  to="/charmanmsg"> <h5 className="aboutItem" ><span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Chairman’s Message</h5></Link>
                             <Link to="/ceomessage">  <h5 className="aboutItem" > <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> CEO’s Message</h5></Link>
                             <Link to="/proparty"> <h5 className="aboutItem" > <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Proparty List</h5></Link>
                             <Link to="/bordofdirector"> <h5 className="aboutItem" > <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Board of Directors</h5></Link>
                             <Link to="/"> <h5 className="aboutItem" > <span style={{color:'tomato',fontSize:'20px'}}><FontAwesomeIcon icon={faAngleRight}/></span> Organizational Structure</h5></Link>
                            
                        </div>
            </div>
        )
    }
}
