import React, { Component } from 'react'
import Subheader from  './Subheader';
import Navbar from './Navbar';
export class PageHeader extends Component {
    render() {
        return (
            <div >
                <Subheader page={this.props}/>
                <Navbar  page={this.props}/>
            </div>
        )
    }
}

export default PageHeader
