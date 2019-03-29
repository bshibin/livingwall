import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactModal from "react-modal";
import ProductDetails from "./ProductDetails";



class Product extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={showProductDetails:false};
    }
    detailsEventhandler()
    {
        this.setState({showProductDetails:true});
    }
    backEventHandler=()=>{
        this.setState({showProductDetails:false});
    }
    addToCartEventHandler=(cart)=>{
        console.log("addToCartEventHandler ",cart);
        this.props.onAddCart(cart);
    }
    render(){
        ReactModal.setAppElement(document.getElementById("root"));
        var product = this.props.product;
        var shortDesc = product.shortDescription;
        shortDesc = shortDesc.substr(0,55)+'...';
        console.log(product);
        return(
            <React.Fragment>
                <Card className="product" onClick={this.detailsEventhandler.bind(this)}>
                    <Card.Img variant="top" src={product.imageUrl}/>
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {shortDesc}
                        </Card.Text>
                        <Card.Text className="product-price">
                        <span className="badge badge-pill badge-success">₹{product.price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {this.state.showProductDetails && 
                    <ReactModal  
                                    
                        shouldCloseOnOverlayClick={true}
                        shouldCloseOnEsc={true} 
                        isOpen={this.state.showProductDetails}
                        onRequestClose={this.backEventHandler}
                        overlaystyle="ReactModal__Overlay"
                        style={{
                            
                            content: {
                                backgroundColor: 'white',
                                color: 'black',
                                padding:'0px'
                            }
                        }} >
                        <ProductDetails productObj={product} onBack={this.backEventHandler} sendDataFromPdToP={this.addToCartEventHandler}/>
                    </ReactModal>
                }
            </React.Fragment>
        );
    }
}

export default Product