import {auth, db} from './config'
import { toast } from 'react-toastify';
import { LoginString } from './LoginString';


export const signoutUser = (history) =>  {
     auth.signOut().then(() => {  
          localStorage.clear();
          history.push('/signin')
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
      });
}

export const  IsLoggedIn = () => {
     var isLogged = false
          if(localStorage.getItem(LoginString.ID)){
              isLogged = true
          }
          return isLogged
    
}

export const getCategories = () => {
   var categories = [];
     db.collection("categories")
     .onSnapshot(snap => {
      snap.forEach(doc => {
        categories.push({...doc.data(), id: doc.id});
      });
    
    });
    return {categories}

  }


  export const getPosts = () => {
     var posts = [];
     db.collection("posts")
     .onSnapshot(snap => {
      snap.forEach(doc => {
        posts.push({...doc.data(), id: doc.id});
      });
    
    });
    return posts
  }