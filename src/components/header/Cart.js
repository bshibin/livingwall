import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactModal from "react-modal";
import Button from "react-bootstrap/Button";

class Cart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={showShoppingCart:false,showPurchase:false};
    }
    backEventHandler=()=>{
        this.setState({showShoppingCart:false,showPurchase:false});
    }
    showCartHandler=()=>{
        this.setState({showShoppingCart:true,showPurchase:false});
    }
    showPurchaseventhandler=()=>{
        this.setState({showPurchase:true});
    }
    purchaseventhandler=()=>{
        this.setState({showShoppingCart:false,showPurchase:false});
        this.props.clearCart();
    }
    render(){
        var cart = this.props.cart;
        console.log("Cart - cart",cart);
        var cartList = cart.map((index,item)=>{
            return(
                <tr></tr>
            );
        })
        var cartCount = 0;
        ReactModal.setAppElement(document.getElementById("root"));
        if (this.props.cart){
            console.log("Cart - product",this.props.cart);
            cartList = cart.map((item,index)=>{
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
        }
        return(
            <React.Fragment>
                <Row>
                    <Col className="shopping-cart" onClick={this.showCartHandler.bind(this)}>
                        <span className="shopping-cart-count rounded-circle">{cartCount}</span>
                    </Col>
                </Row>
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
                        {!this.state.showPurchase && 
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
                        }
                        {this.state.showPurchase && 
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>    
                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option defaultValue>Choose...</option>
                                            <option>Karnataka</option>
                                            <option>Kerala</option>
                                            <option>Tamilnadu</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip"/>
                                    </div>
                                </div>
                            </form>
                        }
                        {!this.state.showPurchase && 
                            <Button variant="primary" onClick={this.showPurchaseventhandler.bind(this)}>CHECK OUT</Button>
                        }
                        {this.state.showPurchase && 
                            <Button variant="primary" onClick={this.purchaseventhandler.bind(this)}>Purchase</Button>
                        }
                    </ReactModal>
                }
            </React.Fragment>
        );
    }
}

export default Cart