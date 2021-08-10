import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="projectimg">
                    <div className="">
                        {/* <img  className="projectimg" src={coverimg} alt="coverimg"/> */}
                        <h1 className="projectHeading PROSTYLE"> PROJECTS</h1>
                    </div>
                   
                </Container>

            </div>
        )
    }
}

