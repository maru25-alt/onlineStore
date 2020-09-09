
import React from "react";
import {LoginString} from 'store/firebase/LoginString';
import moment from 'moment'
import img from 'assets/img/user.png'
import {IsLoggedIn} from 'store/firebase/functions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        profile: "",
        createdAt: "",
      
    };
  }

  componentWillMount(){
    let  isLogged = IsLoggedIn();
    if(isLogged){
        this.setState({
            name : localStorage.getItem(LoginString.Name),
            email : localStorage.getItem(LoginString.Email),
            createdAt: localStorage.getItem(LoginString.CreatedAt),
            profile : localStorage.getItem(LoginString.PhotoURL)
         })
    }
      
  }
  
  render() {
      const {email, name, createdAt, profile} = this.state;
      var profileURL =  img ;
      if((profile) !== null){
          if(profile.length !== 0)
            {
                profileURL = profile;
            }
      }
    return (
      <>
        <div className="content">
        <div className="home-container">
            <div className="row home-header align-items-center">
                    <div className="col-12">
                        <div className="row ml-5">
                            <div className="user-profile">
                             <img className="photo img-fluid" width="150" src={profileURL} alt="profile"></img>
                            </div>
                      
                          <div className="d-flex flex-column mx-3">
                              <span>{name}</span>
                             <span>Email: {email}</span>
                              <span>Joined on {moment(createdAt).format('MMMM Do YYYY')}</span>
                              </div>
                        </div>
                    </div>
                </div>
              
                <div className="home-body my-4">
                    <h2>My Orders</h2>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card  text-center my-2 p-3 animate__animated animate__shakeY" >
                            <div  className="card-img-top" >
                            <i className="fas fa-truck fa-5x"></i>
                              <h2 className="number">4 items</h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Goods to be received</h5> 
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card  text-center my-2 p-3 animate__animated animate__shakeY" >
                            <div  className="card-img-top" >
                                <i className="far fa-credit-card fa-5x"></i>
                               
                                <h2 className="number">4 items</h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Refunds  After Sales</h5> 
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card text-center my-2 p-3 animate__animated animate__shakeY" >
                            <div  className="card-img-top" >
                            <i className="fas fa-cart-arrow-down fa-5x"></i>
                                <h2 className="number">4 items</h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Items in Cart</h5> 
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                        <div className="card text-center my-2 p-3 animate__animated animate__shakeY" >
                            <div  className="card-img-top" >
                                <i className="fas fa-money-bill-alt fa-5x"></i>
                                <h2 className="number">4 items</h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Goods already Paid for</h5> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
