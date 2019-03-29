import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CopyRight extends React.Component{
    render(){
        return(
            <Row className="copy-right">
                <Col>© 2019, LivingWall</Col>
            </Row>
        );
    }
}

export default CopyRight