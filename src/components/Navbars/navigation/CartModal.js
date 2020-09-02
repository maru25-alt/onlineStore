import React, { Component } from 'react'
import CartItems from './CartItems';
import icon from '../../../assets/img/icon.png';

export class CartModal extends Component {
    render() {
        return (
            <div>
                 <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalScrollableTitle">
                        <img width="40" src={icon}></img>
                        3 Items 
                        </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <CartItems/>
                    </div>
                    <div className="mx-5 totals-container ">
                        <p className="float-left  ">Total</p>
                        <p className="float-right">$500<sup>00</sup></p>
                      </div>
                    <div className="modal-footer">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default CartModal
