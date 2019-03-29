import React from "react";
import QuantityManage from "./QuantityManage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    render(){
        var product = this.props.productObj;
        return(
            <div class="container">
                <Row>
                    <Col>
                        <img src={product.imageUrl}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuantityManage qtyInHand={100} onQuantityReceive={this.onQuantityReceiveHnadler}/>
                        <input type="button" value="Back" onClick={this.backEventHandler} />
                        <input type="button" value="Add to Cart" onClick={this.cartEventHandler} />
                    </Col>
                </Row>
            </div>    
        );
    }
}

export default ProductDetails