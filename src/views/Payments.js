import React, { Component } from 'react'

export class Payments extends Component {
    render() {
        return (
            <div className="content payments-container">
                <h1>Payment Methods</h1>

                <div className="method-container ">
                    <div className="card mx-5 my-5">
                       <h3>Method 1: Paypal</h3>
                    </div>
                   
                </div>

                <div className="method-container ">
                    <div className="card mx-5 my-5">
                       <h3>Method 2: Alipay</h3>
                    </div>
                 
                </div>
                <div className="method-container ">
                    <div className="card mx-5 my-5">
                        <h3>Method 3: Credit Card</h3>
                        <div>
                            <div className="row">
                                <h4 className="col">Saved Cards</h4>
                                <button>+ Add Card</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Payments
