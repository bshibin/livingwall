import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

class Links extends React.Component{
    render(){
        return(
            <Row>
                <Col>
                    <Nav activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)} className="justify-content-md-center footer-links">
                        <Nav.Item>
                            <Nav.Link href="/home">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Our Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Terms of Use</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Return Policy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Our Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        );
    }
}

export default Links