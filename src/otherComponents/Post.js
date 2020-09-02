import React, { Component } from 'react'
import PropTypes from 'prop-types';
import img2 from 'assets/img/fashion/img-1.jpg'
export class Post extends Component {
    render() {
       const {id,title,price, moq, category} = this.props.post;
        return (
            <>
           {this.props.post && 
              <a  href={`/single/${id}`} className='col-xs-12 col-sm-6 col-md-4 col-xl-3'>
              <div className=" card my-2">
              <img src={img2} className="card-img-top" alt="..."/>
              <button className="btn cart-btn  animate__animated animate__pulse">Add to cart</button>
                  <div className="card-body">
                      <h6 className='text-muted'>{category}</h6>
                      <h4 className="card-title">{title} </h4>
                      <div>
                          <span className="">MOQ {moq}pc</span>
                          <button  className="btn  float-right">${price.min} - ${price.max}</button>
                         
                      </div>
                      <div className="rating-container float-right">
                      <div className="rating"> 
                          <input type="radio" name="rating" value="5" id="5"/>
                          <label htmlFor="5">☆</label> 
                          <input type="radio" name="rating" value="4" id="4"/>
                          <label htmlFor="4">☆</label>
                          <input type="radio" name="rating" value="3" id="3"/>
                          <label htmlFor="3">☆</label> 
                          <input type="radio" name="rating" value="2" id="2"/>
                          <label htmlFor="2">☆</label> 
                          <input type="radio" name="rating" value="1" id="1"/>
                          <label htmlFor="1">☆</label>
                      </div>  
                  </div>
              </div>
              
          </div>
          </a>

           }
            
            </>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    
 };
export default Post
