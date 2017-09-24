import React, { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";


import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
    { name: "Chisnau", id: "618426" },
    { name: "Balti", id: "618605" },
    { name: "Stauceni", id: "617317" },
    { name: "Mereni", id: "617824" }
];


class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Vremea in Moldova
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Alege orasul</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} id={PLACES[activePlace].id} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;