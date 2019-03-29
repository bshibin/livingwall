import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SocialIcons extends React.Component{
    render(){
        return(
            <Row className="justify-content-md-center social-icon">
                <Col sm={1}><img className="social-icon-img" src="social/fb.png"/></Col>
                <Col sm={1}><img className="social-icon-img" src="social/insta.png"/></Col>
                <Col sm={1}><img className="social-icon-img" src="social/pintrust.png"/></Col>
                <Col sm={1}><img className="social-icon-img" src="social/twitter.png"/></Col>
            </Row>    
        );
    }
}
 export default SocialIcons;