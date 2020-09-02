import React, { Component } from 'react'

export class LoggedInRoutes extends Component {
    render() {
        return (
            <>
            <li className="nav-item">
              <a className="nav-link text-center" href="/admin/dashboard">
                 <i className="far fa-user-circle fa-2x"></i> <br></br>
                 <span>My Account</span>
              </a>
            </li>
            <li className="nav-item">
               <a className="nav-link text-center"  data-toggle="modal" data-target="#exampleModalScrollable">
                <i className="fas fa-shopping-cart fa-2x"></i><br></br>
                <span>My Cart</span>
              </a>
            </li>
            </>
        )
    }
}

export default LoggedInRoutes
