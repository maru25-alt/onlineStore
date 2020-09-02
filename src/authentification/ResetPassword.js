import React, { Component } from 'react'

export class ResetPassword extends Component {
    state ={

    }
    render() {
       
        return (
            <div  className="auth-container">
               <div className="form-container ">
                     <h5 className="text-center"> Reset Password </h5>
                     <form>
                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input type="password" class="form-control" id="password"/>  
                        </div>

                        <div class="form-group">
                            <label for="confpass">Corfirm Password</label>
                            <input type="password" class="form-control" id="confpass"/>
                        </div>
                        
                        <button type="submit" class="btn form-button">Set</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default ResetPassword
