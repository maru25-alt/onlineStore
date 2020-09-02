import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        let {title, link} = this.props.page

        const style = {
            color: "#000",
            fontSize: "2em"
        }
        return (
            <div className="other_navbar-container">
                <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item ">
                        <a className="nav-link link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link link"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link link" href={link}>{title}</a>
                    </li>
                    
                </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
