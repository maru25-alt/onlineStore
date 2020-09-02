import React, { Component } from 'react'

export class LoggedOutRoutes extends Component {
    render() {
        return (
            <>
                <li className="nav-item">
                <a className="btn nav-btn signin-btn" href="/Signin">Sign In</a>
                </li>
                <li className="nav-item">
                <a className="btn nav-btn signup-btn " href="/Signup">Sign Up</a>
                </li> 
            </>
        )
    }
}

export default LoggedOutRoutes
