import React, { Component } from 'react'
import {isEmpty} from 'lodash';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom'
import Footer from '../components/Footer/MainFooter'
import { auth } from 'store/firebase/config';
import { toast } from 'react-toastify';
import {LoginString} from 'store/firebase/LoginString';
import { db } from 'store/firebase/config';



export class Signin extends Component {

    state = {
        email: "",
        password: "",
        errors: {},
    }

    validate = () => {
        let  isError = false;
        const errors = {
           email: "",
           password: ""
        };
        
        if(isEmpty(this.state.email)){
            isError = true;
            errors.email = 'Email is required';
        };
      
        if(isEmpty(this.state.password)){
            isError = true;
            errors.password = 'Password  is required';
        };

        return { isError, errors}
        
    }

    handleChange = (e) => {
         this.setState({
             [e.target.id] : e.target.value
         })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let  {isError, errors } = this.validate() ;
        if(isError){
            this.setState({
                errors: errors
            })   
           }
           else{
               const {email, password} = this.state
               auth.signInWithEmailAndPassword(email, password)
               .then(res => {
                   let user = res.user;
                   if(user){
                        db.collection('user')
                        .where('id', "==", user.uid)
                        .get()
                        .then(snapshot => {
                            snapshot.forEach(doc => {
                                const currentdata = doc.data();
                                localStorage.setItem(LoginString.ID, currentdata.id);
                                localStorage.setItem(LoginString.PhotoURL, currentdata.profile);
                                localStorage.setItem(LoginString.Name, currentdata.name);
                                localStorage.setItem(LoginString.Email, currentdata.email);
                                localStorage.setItem(LoginString.Telephone, currentdata.telephone);
                                localStorage.setItem(LoginString.Telephone2, currentdata.telephone2);
                                localStorage.setItem(LoginString.Address, currentdata.address);
                                localStorage.setItem(LoginString.BillingAdress, currentdata.billingAdress);
                                localStorage.setItem(LoginString.City, currentdata.city);
                                localStorage.setItem(LoginString.Country, currentdata.country);
                                localStorage.setItem(LoginString.Description, currentdata.description);
                                localStorage.setItem(LoginString.CreatedAt, currentdata.createdAt);
                                localStorage.setItem(LoginString.FirebaseDocumentId, doc.id);
                                localStorage.setItem(LoginString.UpLoadChange, "");
                                localStorage.setItem(LoginString.AdminUID, "x6B601j4pFcBNehFxoeM4SzgRnp1")
                                localStorage.setItem(LoginString.AdminDocID, "eSsHXVkeYEgq80dBVvNm")
                            })
                            this.props.history.push('/admin/dashboard')
                            toast.success("successfull loggedIn", {
                                position: "top-right",
                                autoClose: false,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                           
                        })
                        .catch(error => {
                            console.log(error)
                            });
                   }
                 
                    
               }).catch(err =>{
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
        if(localStorage.getItem(LoginString.ID)){
            this.props.history.push('/admin/dashboard')
        }
   }


    render() {
        let {errors} = this.state
        return (
            <>
            <div className="auth-container">
                <div className="form-container ">
                <div className="text-center ">
                        <h1 className="form-heading">
                            <i className="fas fa-home"></i> <br></br>
                            <a href="/">B & M Online Shopping Store</a>
                        </h1>
                        <hr></hr>
                        <h5 className="form-heading"> Welcome. Create your Account </h5>
                  </div>
                     <form onSubmit={this.handleSubmit}>
                        <div className={classnames("form-group", {'has-errors': errors.email})}>
                            <label htmlFor="email">Email address</label>
                            <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email"/>  
                            {errors.email && <span className='errors'>{errors.email}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.password})}>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password"/>
                            {errors.password && <span className='errors'>{errors.password}</span>}
                        </div>
                        
                        <button type="submit" className="btn form-button">Sign In</button>
                        <div className="form-group">
                            <a href="/forgetPassword" className="d-block danger-link">Forget Password</a>
                            <a href="/signup" className="d-block light-link">Create a new account</a>
                        </div>
                    </form>
                </div>
              
            </div>
            <Footer/>
            </>
        )
    }
}

export default (withRouter(Signin))
