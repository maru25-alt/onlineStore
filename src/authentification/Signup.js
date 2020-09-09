import React, { Component } from 'react'
import {isEmpty} from 'lodash';
import classnames from 'classnames'
import { withRouter } from 'react-router';
import Footer from '../components/Footer/MainFooter'
import { auth } from 'store/firebase/config';
import {  toast } from 'react-toastify';
import { db , timestamp} from 'store/firebase/config';
import {LoginString} from 'store/firebase/LoginString';
import {IsLoggedIn} from 'store/firebase/functions'


export class Signup extends Component {
     state = {
         username: "",
         email: "",
         password: "",
         confpassword: "",
         agreement: false,
         errors: {}
     }

     validate = () => {
        let  isError = false;
        const errors = {
           email: "",
           password: "",
           confpassword: "",
           username: "",
        };
        //let re = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;

        if(isEmpty(this.state.email)){
            isError = true;
            errors.email = 'Email is required.';
        };
        // if(!re.test(this.state.email)){
        //     isError= true;
        //     errors.email = "Email must be valid."
        // }
        if(isEmpty(this.state.password)){
            isError = true;
            errors.password = 'Password is required.';
        };

        if((this.state.password.length < 8)){
            isError = true;
            errors.password = 'Password should be at least 8 characters.';
        };

        if(isEmpty(this.state.username)){
            isError = true;
            errors.username = 'Username is required.';
        };
        
        if((this.state.password !== this.state.confpassword)){
            isError = true;
            errors.confpassword = 'Password dont match.';
        };

        if(isEmpty(this.state.confpassword)){
            isError = true;
            errors.confpassword = 'Please confirm your password.';
        };

        return { isError, errors}
        
    }

     handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
            errors: {}
        })
     }
    

     handleSubmit = (e) => {
         e.preventDefault();
         this.setState({
             errors: {}
         })
         let  {isError, errors } = this.validate() ;
         if(isError){
             this.setState({
                 errors: errors
             })   
            }
         else{
            const {email, password, username} = this.state
              auth.createUserWithEmailAndPassword(email, password).then(res => {
                  const id = res.user.uid;
                  const time = timestamp()
                  db.collection('user').add({
                    id:id,
                    name: username,
                    email: email,
                    profile: "",
                    telephone: "",
                    telephone2: "",
                    address: "",
                    billingAdress: "",
                    city: "",
                    country: "",
                    description: '',
                    createdAt: time  
                  }).then((docRef) => {
                    localStorage.setItem(LoginString.ID, id);
                    localStorage.setItem(LoginString.PhotoURL, "");
                    localStorage.setItem(LoginString.Name, username);
                    localStorage.setItem(LoginString.Email, email);
                    localStorage.setItem(LoginString.Telephone, "");
                    localStorage.setItem(LoginString.Telephone2, "");
                    localStorage.setItem(LoginString.Address,"");
                    localStorage.setItem(LoginString.BillingAdress, "");
                    localStorage.setItem(LoginString.City, "");
                    localStorage.setItem(LoginString.Country, "");
                    localStorage.setItem(LoginString.Description, "");
                    localStorage.setItem(LoginString.CreatedAt, time);
                    localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id);
                    localStorage.setItem(LoginString.UpLoadChange, "");
                    localStorage.setItem(LoginString.AdminUID, "x6B601j4pFcBNehFxoeM4SzgRnp1")
                    localStorage.setItem(LoginString.AdminDocID, "eSsHXVkeYEgq80dBVvNm")

                    toast.success("successfull loggedIn", {
                        position: "top-center",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    this.props.history.push('/admin/dashboard')
                  }).catch(err => {
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
              }).catch(err => {
                   console.log(err)
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

     componentWillMount(){
         let isLogged = IsLoggedIn()
          if(isLogged){
              this.props.history.push('/admin/dashboard')
          }
     }

    render() {
        let {errors} = this.state
        return (
            <>
            <div className="auth-container signup-container">
              <div className="form-container  ">
                  <div className="text-center ">
                        <h1 className="form-heading">
                            <i className="fas fa-home"></i> <br></br>
                            <a href="/">B & M Online Shopping Store</a>
                        </h1>
                        <hr></hr>
                        <h5 className="form-heading"> Welcome. Create your Account </h5>
                  </div>
                 
                    
                     <form onSubmit={this.handleSubmit}>
                     <div className={classnames("form-group", {'has-errors': errors.username})}>
                            <label htmlFor="username">Full Name</label>
                            <input type="text" onChange={this.handleChange} value={this.state.username} className="form-control" id="username"/> 
                            {errors.username && <span className='errors'>{errors.username}</span>} 
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.email})}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="email"/>  
                            {errors.email && <span className='errors'>{errors.email}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.password})}>
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={this.handleChange} value={this.state.password} className="form-control" id="password"/>
                            {errors.password && <span className='errors'>{errors.password}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.confpassword})}>
                            <label htmlFor="confpassword">Verify Password</label>
                            <input type="password" value={this.state.confpassword} onChange={this.handleChange} className="form-control" id="confpassword"/>
                           <br></br> {errors.confpassword && <span className='errors'>{errors.confpassword}</span>}
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="agreement">
                             By signing up you are  agreeing  to our Terms and Conditions
                            </label>
                        </div>
                        <a href="/signin" className="d-block danger-link">Already have an account</a>
                        <button type="submit" className="btn form-btn">Sign Up</button>
                        
                    </form>
                </div>
               
            </div>
            <Footer/>
            </>
        )
    }
}
// const mapActionsToProps = {
//     signupUser,
//     addUserDetails
// }

export default (withRouter(Signup))
