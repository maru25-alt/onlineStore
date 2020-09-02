import React, { Component } from 'react';
import Item from './Item'

export class CartItems extends Component {
    render() {
        return (
            <div>
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}

export default CartItems
