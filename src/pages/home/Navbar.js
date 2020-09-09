import React, { Component } from 'react'


export class Navbar extends Component {
   
    render() {
        const {categories} = this.props
        return (
        <div>
            <nav className="header-navbar  d-sm-none d-md-block">  
                <ul className="nav nav-content">
                    <li className="nav-item">
                    <div className="btn-group">
                        <button type="button" className="btn btn-dropdown btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </button>
                       
                        <div className="dropdown-menu">
                        {categories && categories.map(e => {
                           return( <a key={e.id} className="dropdown-item" href="/">{e.title}</a>)
                        })}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/coupons"><span>*</span> Special Offers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    
                </ul>  
             </nav>
            </div>
        )
    }
}

export default Navbar
