import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'


export class Comment extends Component {
    render() {
        const {name, date, comment} = this.props.comment
        return (
            <div className="comment">
               
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <div className="avatar">{name.charAt(0).toUpperCase()}</div>
                    </div>
                    <div className="col-md-8 col-sm-10">
                        <p>{name}</p>
                        <p>{moment(date).startOf().fromNow()  }</p>
                        <p>{comment}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};

export default Comment
