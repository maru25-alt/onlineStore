import React, { Component } from 'react'

export class Subheader extends Component {
    render() {
        let {title, subtitle} = this.props.page
        console.log(this.props)
        return (
            <div className="subheader-container">
                <div className="text-center subheader-content">
                    <h2 className="display-4">{title}</h2>
                    <h6 className="subheading">{subtitle}</h6>
                </div>
            </div>
        )
    }
}

export default Subheader
