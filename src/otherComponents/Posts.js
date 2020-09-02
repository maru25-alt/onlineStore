import React, { Component } from 'react'
import Post from './Post'
import PropTypes from 'prop-types';

export class Posts extends Component {
   
    render() {
       
        return (
            <div className='container-fluid'>
                 <div className='row'>
                     {this.props.products && this.props.products.map(e => {
                         return(
                             <Post key={e.id}  post={e}/>
                         )
                     })}
                 </div>
            </div>
        )
    }
}

Posts.propTypes = {
   products: PropTypes.array.isRequired,
   
};

export default Posts
