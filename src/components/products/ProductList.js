import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import ProductItems from "../ProductItems";
import axios from "axios";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
        if(this.state.ProductItems && this.state.ProductItems.length > 0 ){
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
        }else{
            return(
                <Row className="justify-content-md-center products-container">
                </Row>
            );
        }
    }
}

const mapStateToProps=(state)=>{
    console.log("#############");
    console.log(state);
    return{
        product: state.firestore.ordered.products
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(ProductList)
