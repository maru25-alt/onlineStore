import React, { Component } from 'react'
import PinInput from "react-pin-input";

export class Input extends Component {
    state = {
        value: ""
      };
    
      onChange = value => {
        this.setState({ value });
      };
    
      onClear = () => {
        this.setState({
          value: ""
        });
        this.pin.clear();
      };

    render() {
        
        return (
            <div>
                  <PinInput
                    length={6}
                    focus
                    // disabled
                    secret
                    ref={p => (this.pin = p)}
                    type="numeric"
                    onChange={this.onChange}
                   />
            <div className="form-group my-3">
                            <button type="submit" class="btn form-button m-1">Enter</button>
                            <button className="btn btn-danger" onClick={this.onClear}>Clear</button>
                            <a type="button" className="d-block m-1">Haven't received code. Resend Code</a>
                        </div>
            </div>
        )
    }
}

export default Input
