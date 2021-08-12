import React, { Component } from 'react'
import { Dropdown, Container, } from 'react-bootstrap'
export default class ProjectSitebar extends Component {
    render() {
        const ariaList={
            name1:'Riydh',
            name2:'Al Malaz',
            name3:'Al Khaleej',
            name4:'',
            name5:'',
            name6:''
        }
        return (
            <div>

                <Container>
                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle id="dropdown-autoclose-false">
                   Aria
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#">Al Khaleej</Dropdown.Item>
                    <Dropdown.Item href="#">Al Malaz</Dropdown.Item>
                    <Dropdown.Item href="#">Al rimal</Dropdown.Item>
                    <Dropdown.Item href="#">Al Khaleej</Dropdown.Item>
                    <Dropdown.Item href="#">Al Malaz</Dropdown.Item>
                    <Dropdown.Item href="#">Al rimal</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
               
           </Container>
            </div>
        )
    }
}
