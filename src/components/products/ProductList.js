import React from 'react'
import Row from "react-bootstrap/Row";
import Product from "./Product";

const ProductList = ({products, category}) => {
  console.log("products, category");
  console.log(category);
  console.log("products, category");
    return (
        <Row className="justify-content-md-center products-container">
        { products && products.map(product => {
          if ( category=="all" || (product.category && product.category == category) ){
            if(product.category != "test"){
            return (
              <Product product={product} key={product.id}/>
            )}}
        })}  
        </Row>
    )
  }
  
  export default ProductList
