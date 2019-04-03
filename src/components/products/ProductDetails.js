import React from "react";
import QuantityManage from "./QuantityManage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class ProductDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={quantity:1}
    }
    onQuantityReceiveHnadler=(p1)=>{
        console.log("onQuantityReceiveHnadler ",p1);
        this.setState({quantity:p1});
    }
    cartEventHandler=()=>
    {
        console.log("cartEventHandler");
        var newObj={
            obj:this.props.productObj,
            quantity:this.state.quantity
        }
        console.log(newObj);
        this.props.sendDataFromPdToP(newObj);
        this.props.onBack()
    }
    backEventHandler=()=>
    {
        alert("back");
    }
    render(){
        var product = this.props.productObj;
        return(
            <div className="product-container">
                <Row className="product-details">
                    <Col sm={6}>
                        <img className="product-image" src={product.imageUrl} rounded/>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm={12}>
                                <h1>{product.productName}</h1>
                            </Col>
                            <Col sm={12} className="product-price">
                                Rs. {product.price}
                            </Col>
                            <Col sm={12}>
                                {product.shortDescription}
                            </Col>
                            <Col sm={12}>
                                <ButtonToolbar className="product-buttons">
                                    {product.affiliate ? (
                                        <Button variant="success" size="lg" block href={product.affiliateLink}>Buy Now</Button>
                                    ) : (
                                        <React.Fragment>
                                            <Button variant="outline-secondary" onClick={this.backEventHandler}>Back</Button>
                                            <QuantityManage qtyInHand={100} onQuantityReceive={this.onQuantityReceiveHnadler}/>
                                            <Button variant="outline-success" onClick={this.cartEventHandler}>Add to Cart</Button>
                                        </React.Fragment>
                                    )}
                                </ButtonToolbar>    
                            </Col>
                            <Col sm={12}>
                                {product.longDescription}
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            </div>    
        );
    }
}

export default ProductDetails