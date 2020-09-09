import React, { Component } from 'react'
import img from '../assets/img/fashion/img-2.png';

export class Orders extends Component {
    render() {
        return (
            <div className="content orders-container">
                <h1> Orders </h1>

                <div className="orders mx-5">
                    <div className="order">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                   <img className="img-fluid" src={img} width="150" alt="order"></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <p>item description in details item description in details item description in details item description in details</p>
                                    <p className="text-muted">Issued Date: 25 June 202</p>
                                    <div>
                                        <p> Amount Paid: $60</p>
                                    </div>
                                    <div className="row my-5">
                                    <button className="btn col btn-secondary mx-2">View Receipt</button>
                                    <button className="btn col btn-success mx-2">Message Supplier</button>
                                    <button className="btn col btn-danger mx-4" >Apply for Refund</button>
                                  </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="order  my-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                   <img className="img-fluid" src={img} width="150"></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <p>item description in details item description in details item description in details item description in details</p>
                                    <p className="text-muted">Issued Date: 25 June 202</p>
                                    <div>
                                        <p> Amount Paid: $60</p>
                                    </div>
                                    <div className="row my-5">
                                    <button className="btn col btn-secondary mx-2">View Receipt</button>
                                    <button className="btn col btn-success mx-2">Message Supplier</button>
                                    <button className="btn col btn-danger mx-4" >Apply for Refund</button>
                                  </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="order  my-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                   <img className="img-fluid" src={img} width="150"></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <p>item description in details item description in details item description in details item description in details</p>
                                    <p className="text-muted">Issued Date: 25 June 202</p>
                                    <div>
                                        <p> Amount Paid: $60</p>
                                    </div>
                                    <div className="row my-5">
                                    <button className="btn col btn-secondary mx-2">View Receipt</button>
                                    <button className="btn col btn-success mx-2">Message Supplier</button>
                                    <button className="btn col btn-danger mx-4" >Apply for Refund</button>
                                  </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="order my-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                   <img className="img-fluid" src={img} width="150"></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <p>item description in details item description in details item description in details item description in details</p>
                                    <p className="text-muted">Issued Date: 25 June 202</p>
                                    <div>
                                        <p> Amount Paid: $60</p>
                                    </div>
                                    <div className="row my-5">
                                    <button className="btn col btn-secondary mx-2">View Receipt</button>
                                    <button className="btn col btn-success mx-2">Message Supplier</button>
                                    <button className="btn col btn-danger mx-4" >Apply for Refund</button>
                                  </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders
