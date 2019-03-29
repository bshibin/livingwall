import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import ProductItems from "../ProductItems";
import axios from "axios";
import { connect } from "react-redux";

class ProductList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={ProductItems:this.props.product};
    }
    /* componentDidMount(){
        axios.get("/lwProducts")
        .then((response)=>{
          console.log(response.data);
          this.setState({ProductItems:response.data});
        })
        .catch((error)=>{
          console.log(error);
        })
    } */
    shoppingCartAddEventHandler=(obj)=>{
        console.log(" product list - shoppingCartChangeEvent");
        console.log(obj);
        this.props.onShoppingCart(obj);
    }
    render(){
        console.log(this.props);
        var productListDisplay=this.state.ProductItems.map((item)=>{
            return(
                <Product product={item} onAddCart={this.shoppingCartAddEventHandler}/>
            );
        })
        return(
            <Row className="justify-content-md-center products-container">
                {productListDisplay}
            </Row>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        product: state.product.products
    }
}

export default connect(mapStateToProps)(ProductList)
