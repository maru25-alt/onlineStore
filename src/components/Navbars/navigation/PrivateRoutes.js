import React , { useState, useEffect, Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {isUserLoggedIn} from '../store/actions/usersActions';

// const PrivateRoute = ({ component: ComposedComponent,isUserLoggedIn, isAuthentification, ...rest }) => {
//   useEffect(() =>{
//    isUserLoggedIn();
//   },[])
//        return(
//         <Route {...rest} render={props => (
//           isAuthentification !== null? <ComposedComponent {...props} />
//           : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
//       )} />

//        ) 
//      }
 class PrivateRoute extends Component {
   componentWillReceiveProps(){
    // console.log('mounted')
    //this.props.isUserLoggedIn()
  }
  render() {
  const  {component: ComposedComponent, isUserLoggedIn, isAuthentification, ...rest} = this.props
    return(
      <Route {...rest} render={props => (
        isAuthentification !== null? <ComposedComponent {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />

     ) 
  }
}


const mapStateToProps = (state) => ({
  isAuthentification: state.usersReducer.user
})

export default connect(mapStateToProps, {isUserLoggedIn})(PrivateRoute)