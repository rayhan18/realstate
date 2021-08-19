import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Agent from "../Agents/Agent"
export default class BordofDirector extends Component {
    render() {
        return (
            <div>
                <Container className="slideInUp">
                    <Agent title="Bord of Director"subTitle="Lorem ipsum dolor sit amet consectetur"/>
                    <Agent/>
                    <Agent/>
                </Container>
            </div>
        )
    }
}
