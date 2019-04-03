import React from 'react'
import Row from "react-bootstrap/Row";
import Product from "./Product";

const ProductList = ({products}) => {
    return (
        <Row className="justify-content-md-center products-container">
        { products && products.map(product => {
          return (
            <Product product={product}/>
          )
        })}  
        </Row>
    )
  }
  
  export default ProductList
