import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class ButtonLink extends Component {
    render() {
        return (
            <div>
                 <div className="justify-item text-center mt-5 mb-1">
                    <Button variant="outline-primary mr-2"><Link to="/apartment">Appartment</Link></Button>
                    <Button variant="outline-warning mr-2"><Link to="/familyhouse">Family House</Link></Button>
                    <Button variant="outline-success mr-2"><Link to="/mordanvilla">Morden Villa</Link></Button>
                    <Button variant="outline-warning mr-2"><Link to="/villa">Villa</Link></Button>
                    <Button variant="outline-primary mr-2"><Link to="/townhouse">Town House</Link></Button>
                    <Button variant="outline-info mr-2"><Link to="/office">Office</Link></Button>
                    </div>
            </div>
        )
    }
}
