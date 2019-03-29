import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Row className="justify-content-md-center">
                <Col>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Plants</Navbar.Brand>
                    <Navbar.Brand href="#home">Terrariums</Navbar.Brand>
                    <Navbar.Brand href="#home">Accessories</Navbar.Brand>
                    <Navbar.Brand href="#home">Soil & Fertilizers</Navbar.Brand>
                    <Navbar.Brand href="#home">Our Special</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
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