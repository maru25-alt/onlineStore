import React, { Component } from 'react'
//import {connect} from 'react-redux';
//import {signoutUser} from '../../../store/actions/usersActions';
import {withRouter} from 'react-router-dom';
import {auth} from '../store/firebase/config'


export class Settings extends Component {
    logout = () =>{
        auth.signOut().then(() => {  
            localStorage.clear();
            this.props.history.push('/signin')
        });
       
    }
    render() {
        
        return (
            <div className=" content settings-container">
                <h1>Settings</h1>

                <div className="info-container m-5">
                    <h6>Notifications</h6>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Allow notifacations</label>
                    </div>
                </div>
                <div className="info-container  m-5">
                    <h6>Help</h6>
                </div>
                <div className="info-container  m-5">
                    <h6>About</h6>
                </div>

                <div className="info-container  m-5">
                    <h6>Login Info</h6>
                    <div>
                        <button className=" btn mx-2">Add Account</button>
                        <button onClick={this.logout} className="btn btn-danger mx-2">Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withRouter(Settings))
