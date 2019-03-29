import React from "react";
import ReactModal from "react-modal";

class CartItems extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={showShoppingCart:false};
    }
    backEventHandler=()=>{
        this.setState({showShoppingCart:false});
    }
    showCartHandler=()=>{
        this.setState({showShoppingCart:true});
    }
    render(){
        var cart = this.props.cart;
        var cartCount = 0;
        var cartList = cart.map((item,index)=>{
            console.log("Cart - item",item);
            var sn = index + 1;
            var productName = item[0].productName;
            console.log("Cart - productName",productName);
            var quantity = item[0].quantity;
            var price = item[0].price;
            var amount = quantity * price;
            cartCount = cartCount + quantity;
            return(
                <tr>
                    <th scope="row">{sn}</th>
                    <td>{productName}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                </tr>
            );
        })
        return(
            <React.Fragment>
                {this.state.showShoppingCart && 
                    <ReactModal          
                        shouldCloseOnOverlayClick={true}
                        shouldCloseOnEsc={true} 
                        isOpen={this.state.showShoppingCart}
                        onRequestClose={this.backEventHandler}
                        overlaystyle="ReactModal__Overlay"
                        style={{
                            
                            content: {
                                backgroundColor: 'white',
                                color: 'black'
                            }
                        }} >
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList}
                            </tbody>
                        </table>
                    </ReactModal>
                }
            </React.Fragment>
        );
    }
}

export default CartItems