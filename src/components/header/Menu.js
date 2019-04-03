import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Switch, Route } from "react-router-dom"

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("menu props");
        console.log(props);
        console.log("menu props");
    }
    render()
    {
        return(
            <Row className="justify-content-md-center">
                <Col>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' />
                            <Route path='/plants/:category' />
                        </Switch>
                    </BrowserRouter>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="plants">Plants</Navbar.Brand>
                        <Navbar.Brand href="terrariums">Terrariums</Navbar.Brand>
                        <Navbar.Brand href="accessories">Accessories</Navbar.Brand>
                        <Navbar.Brand href="fertilizers">Soil & Fertilizers</Navbar.Brand>
                        <Navbar.Brand href="special">Our Special</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="blog">Blog</Nav.Link>
                                <Nav.Link href="contact">Contact</Nav.Link>
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}
export default Menu;