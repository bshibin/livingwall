import React from "react";
import Row from "react-bootstrap/Row";

import CopyRight from "./CopyRight";
import ContactDetails from "./ContactDetails";
import Subscription from "./Subscription";
import SocialIcons from "./SocialIcons";
import Links from "./Links";
import Col from "react-bootstrap/Col";


class index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col>
                        <Links/>
                    </Col>
                </Row>
                <Row>
                    <Col>        
                        <SocialIcons/>   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Subscription/>             
                    </Col>
                </Row>
                <Row>
                    <Col>    
                        <ContactDetails/>
                    </Col>
                </Row>
                <Row>
                    <Col>    
                        <CopyRight/>
                    </Col>    
                </Row> 
            </React.Fragment>
        );
    }
}

export default index