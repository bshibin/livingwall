import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import ProductItems from "../ProductItems";
import ProductList from "./ProductList";
import axios from "axios";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";


class Index extends React.Component{
    shoppingCartAddEventHandler=(obj)=>{
        console.log(" product list - shoppingCartChangeEvent");
        console.log(obj);
        this.props.onShoppingCart(obj);
    }
    render(){
        const { products } = this.props;
        return(
            <Row className="justify-content-md-center products-container">
                <ProductList products={products} />
            </Row>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        products: state.firestore.ordered.products
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(Index)
