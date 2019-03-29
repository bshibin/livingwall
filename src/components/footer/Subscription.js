import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Subscription extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Col sm={5} className="subscription-text">
                        Sign up for our newsletter to receive great offers!
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email Address"
                                aria-label="Email Address"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" className="subscription-button">SUBSCRIBE</Button>
                            </InputGroup.Append>
                            </InputGroup>
                    </Col>    
                </Row>
            </React.Fragment>    
        );
    }
}

export default Subscription