import React, { Component } from 'react';
import {isEmpty} from 'lodash';
import { toast } from 'react-toastify';
import { auth } from 'store/firebase/config';
import { withRouter } from 'react-router';

export class ForgetPassword extends Component {
   
    state = {
        email: "",
        error: ""
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
   }
   handleSubmit = (e) => {
       e.preventDefault();
       let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(isEmpty(this.state.email)){
          this.setState({
              error: "email is required"
          })
       }
       else if(!re.test(this.state.email)){
        this.setState({
            error: "enter a valid email"
        })
       }
       else{
          auth.sendPasswordResetEmail(this.state.email).then(e => {
              console.log(e)
              this.props.history.push('/resentpassword')
                toast.success(`email is send to  ${this.state.email}`, {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

          }).catch(err =>{
            toast.error(err.message, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          })
       }

      

       
   }
    render() {
        const {error, email} = this.state
        return (
            <div  className="auth-container">
                 <div className="form-container ">
                     <h5 className="text-center form-heading"> Recover Password </h5>
                     <p>Enter your email address to reset your password</p>
                     <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" onChange={this.handleChange} value={email} className="form-control" id="email"/>  
                            {/* <input type="text" value={email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter your email address"/>   */}
                        </div>
                        {error && <span className='errors'>{error}</span>} 
                        <div className="form-group">
                            <button type="submit" className="btn form-button m-1">Send</button>
                            <a type="button" href="/signin" className="btn btn-danger m-1">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ForgetPassword)
