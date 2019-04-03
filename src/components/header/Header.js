import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Menu from "./Menu";
import Carousels from "./Carousels";
import Cart from "./Cart";

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    clearCart=()=>{
        this.props.onClearCart();
    }
    render()
    {
        console.log("Header qty");
        console.log(this.props.cart);
        return(
            <React.Fragment>
                <Row className="header">
                    <Col sm={2}><img src="logo.png"/></Col>
                    <Col sm={8} className="header-title">
                        <span className="header-title1">Living Wall</span>
                        <span className="header-title2">Love The Nature</span>
                        {this.props.qty}
                    </Col>
                    <Col sm={2}><Cart cart={this.props.cart} clearCart={this.clearCart} /></Col>
                </Row>
                <Menu />                
                <Carousels />
            </React.Fragment>
        );
    }
}
export default Header;