import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png';
import CartModal from './CartModal';
import Search from './Search';
import {connect} from 'react-redux';
import {isUserLoggedIn} from '../../../store/actions/usersActions';
import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';

import {auth} from '../../../store/firebase/config'


export class Navigation extends Component {
   state = {
     isLoggedIn : false
   }

  componentDidMount(){
    auth.onAuthStateChanged((user) =>{
      if(user){
          this.setState({
            isLoggedIn : true
          })
      }

    })
    
  }
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light ">
           <a href="/" className="">
             <img className="img-fluid" src={logo} alt="logo"></img>
           </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Search/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav ml-auto">
               {this.state.isLoggedIn ?  <LoggedInRoutes/> :  <LoggedOutRoutes/>}
          </ul>
         
        </div>
         <CartModal/>
      </nav>
        )
    }
}


const mapStateToProps = (state) => ({
  user: state.usersReducer.user
})

export default connect(mapStateToProps, {isUserLoggedIn})(Navigation)
