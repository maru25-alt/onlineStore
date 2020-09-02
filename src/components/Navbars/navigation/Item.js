import React, { Component } from 'react';
import img from '../../../assets/img/fashion/img-2.png';

export class CartItem extends Component {
    state={
        value:1,
        price: 67
    }
    handleIncrease =(e)=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    handleDecrease = (e)=> {
        var value = this.state.value;
        if(value > 0){
            this.setState({
                value: value - 1
            })
        }
        else{
            this.setState({
                value: 0
            })
        }
        

    }
    render() {
        const total= this.state.value * this.state.price;
        return (
            <div className="card py-3">
                <div className="alert  alert-dismissible fade show" role="alert">
                   
                    <div className="row">
                      <div className="col-6">
                          <img src={img} className="img-fluid" alt="item"></img>
                      </div>
                      <div className="col-6">
                          <p>Item Description You should check in on some</p>
                          <div className="row">
                             <div className="col-4">
                            
                                 <span>1 X 1pc(s)</span>
                            </div>
                             <div className="col-8">
                                 <h6>$67</h6>
                                 <div className="increase_decrease-input">
                                    <button type="button" onClick={this.handleDecrease} className="value-button" id="minus">−</button>
                                    <input type="number" readOnly value={this.state.value} id="input"/>
                                    <button type="button" onClick={this.handleIncrease} className="value-button" id="plus">+</button>
                                 </div>
                             </div>
                          </div>
                         <div className="float-right">Total: {total}</div>
                         
                      </div>
                    </div>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default CartItem
