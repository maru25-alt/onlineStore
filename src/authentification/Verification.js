import React, { Component } from 'react'
import PinInput from '../otherComponents/PinInput';

export class Verification extends Component {
    render() {
        return (
            <div  className="auth-container">
                <div className="form-container ">
                     <h5 className="text-center form-heading"> Verify Email </h5>
                     <p>Email has been send to (your email) which contain 6-figure code</p>
                     <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Enter your Code</label>
                           <PinInput/>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Verification
