import {auth, db} from '../firebase/config';
import { ISLOGGED_IN } from './types';


export const isUserLoggedIn = () => dispatch => {
   
    auth.onAuthStateChanged((user) => {
        if(user){
            dispatch({
                type: ISLOGGED_IN,
                payload: user
            })
        }
        else{
            dispatch({
                type: ISLOGGED_IN,
                payload: null
            })
        }
    })
}

export const signupUser = (user) => dispatch => {
   return auth.createUserWithEmailAndPassword(user.email, user.password)
}

export const signinUser = (user) => dispatch => {
   return auth.signInWithEmailAndPassword(user.email, user.password)
}

export const signoutUser = () => dispatch => {
    return auth.signOut();
}

export const addUserDetails = (user) => dispatch => {
  db.collection('users')
  .add({
      id: user.user.uid,
      email : user.email,
      username: user.username
  }).then(e => {
     alert('user added');
  }).catch(err => console.log(err))
}

export const resetPassword = email => async dispatch => {
    return auth.sendPasswordResetEmail(email);
    
  };


  export const getUserDetails = () => dispatch => {
       db.collection('user')
  }