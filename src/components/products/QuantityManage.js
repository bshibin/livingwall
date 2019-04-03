import React from "react";
import Button from "react-bootstrap/Button";

class QuantityManage extends React.Component {
    constructor(props)
        {
            super(props);
            this.state={qty:1}
        }
        
        clickHandler=(p1)=>{
            let temp=this.state.qty;
            console.log (temp);
            console.log (p1);
            if(p1=="minus")
            {        
                if(this.state.qty>0)
                {   
                    this.setState((prevState)=>{
                        temp=prevState.qty-1;
                        this.props.onQuantityReceive(temp);
                        return {...prevState,qty:temp};
                    });
                }
            }
            else
            {                
                if(this.state.qty<this.props.qtyInHand)
                {
                    this.setState((prevState)=>{
                        temp=prevState.qty+1;
                        this.props.onQuantityReceive(temp);
                        return {...prevState,qty:temp};
                    });
            
                }
                
            }
            
            
        }
    render() {
        
        return (
            <React.Fragment>
                <Button variant="outline-info" onClick={this.clickHandler.bind(this,"minus")}>-</Button>
                <Button variant="outline-info">{ this.state.qty }</Button>
                <Button variant="outline-info" onClick={this.clickHandler.bind(this,"plus")}>+</Button>
            </React.Fragment>
        );
    }
}
export default QuantityManage;