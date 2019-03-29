import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import Footer from "./components/footer/index";

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state={cart:[]}
  }

  addToCartEventHandler=(cart)=>{
    var cartObj = [{
      productId: cart.obj.productId,
      productName: cart.obj.productName,
      price: cart.obj.price,
      imageUrl: cart.obj.imageUrl,
      quantity: cart.quantity
    }]
    var cart = this.state.cart;
    cart.push(cartObj);
    this.setState({cart:cart});
  }
  clearCart=()=>{
    this.setState({cart:[]});
  }
  render() {

    return (
      <Container>
          <Header cart={this.state.cart} onClearCart={this.clearCart}/>
          <ProductList onShoppingCart={this.addToCartEventHandler}/>
          <Footer/>
      </Container>
    );
  }
}

export default App;
