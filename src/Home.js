import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from "./components/header/Header";
import Products from "./components/products/index";
import Footer from "./components/footer/index";

class Home extends Component {
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
    const category = this.props.match.params.category? this.props.match.params.category : "all";
    return (
      <Container>
          <Header cart={this.state.cart} onClearCart={this.clearCart}/>
          <Products onShoppingCart={this.addToCartEventHandler} category={category}/>
          <Footer/>
      </Container>
    );
  }
}

export default Home;
