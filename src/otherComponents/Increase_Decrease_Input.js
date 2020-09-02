import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Increase_Decrease_Input extends Component {
    handleChange = (e) => {
        this.props.handleChange(e.target.id);
    }
    render() {
        const {value,disable, id} = this.props
        return (
            <div className="increase_decrease-input" id={id}>
                <button disable={disable} type="button" onClick={this.handleChange}  className="value-button " id="minus">−</button>
                <input readOnly type="number" value={value}  id="input"/>
                <button disabled={disable} type="button"  onClick={this.handleChange} className="value-button " id="plus">+</button>
            </div>
        )
    }
}

Increase_Decrease_Input.propTypes = {
      value: PropTypes.number.isRequired,
     // disable: PropTypes.bool.isRequired
};

export default Increase_Decrease_Input
