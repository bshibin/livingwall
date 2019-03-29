import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class ContactDetails extends React.Component{
    render(){
        return(
            <Row className="contact-details">
                <Col sm={12}>Email: life@livingwall.in</Col>
                <Col sm={12}>Whatsapp: +91 9845657938</Col>
            </Row>
        );
    }
}

export default ContactDetails