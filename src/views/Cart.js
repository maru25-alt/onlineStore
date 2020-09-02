import React, { Component } from 'react'
import img from '../assets/img/fashion/img-2.png';
export class Cart extends Component {

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
        return (
            <div className="content cart-container">
              <h1>Shopping Cart</h1>
              <form>
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td className="row">
                            <div className="col-md-4 col-sm-12">
                                <img src={img} width="100"></img>
                                </div>
                            <div className="col-md-8 col-sm-12">
                                <p>item description in details</p>
                            </div>
                            </td>
                            <td>$60.00</td>
                            <td>
                                <div className="increase_decrease-input">
                                    <button type="button" onClick={this.handleDecrease} className="value-button" id="minus">−</button>
                                    <input type="number" readOnly value={this.state.value} id="input"/>
                                    <button type="button" onClick={this.handleIncrease} className="value-button" id="plus">+</button>
                                </div>
                            </td>
                            <td>$120.00</td>
                        </tr>

                        <tr>
                            <td className="row">
                            <div className="col-md-4 col-sm-12">
                                <img src={img} width="100"></img>
                                </div>
                            <div className="col-md-8 col-sm-12">
                                <p>item description in details</p>
                            </div>
                            </td>
                            <td>$60.00</td>
                            <td>
                                <div className="increase_decrease-input">
                                    <button type="button" onClick={this.handleDecrease} className="value-button" id="minus">−</button>
                                    <input type="number" readOnly value={this.state.value} id="input"/>
                                    <button type="button" onClick={this.handleIncrease} className="value-button" id="plus">+</button>
                                </div>
                            </td>
                            <td>$120.00</td>
                        </tr>

                        <tr>
                            <td className="row">
                            <div className="col-md-4 col-sm-12">
                                <img src={img} width="100"></img>
                                </div>
                            <div className="col-md-8 col-sm-12">
                                <p>item description in details</p>
                            </div>
                            </td>
                            <td>$60.00</td>
                            <td>
                                <div className="increase_decrease-input">
                                    <button type="button" onClick={this.handleDecrease} className="value-button" id="minus">−</button>
                                    <input type="number" readOnly value={this.state.value} id="input"/>
                                    <button type="button" onClick={this.handleIncrease} className="value-button" id="plus">+</button>
                                </div>
                            </td>
                            <td>$120.00</td>
                            
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td > <h3 className="display-6">Total</h3></td>
                            <td>$250.00</td>
                        </tr>
                            
                </tbody>
                </table> 
                </form>
            </div>

           
        )
    }
}

export default Cart
