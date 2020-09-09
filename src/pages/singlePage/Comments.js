import React, { Component } from 'react'
import Comment from '../../otherComponents/Comment'
// import {connect} from 'react-redux';
// import {addComment} from '../../store/actions/productsActions';


export class Comments extends Component {
   state = {
       name: "",
       comment: "",
   }

   handleChange = (e) => {
       this.setState({
          [e.target.id]: e.target.value
       })
   }
   handleSubmit = (e) => {
       e.preventDefault();
       this.props.addComment({
           name: this.state.name,
           comment: this.state.comment
       });
       this.setState({
           name: "",
           comment: ""
       })
       
   }
    render() {
        return (
            <div className="comment-container my-5">
                <h4>Leave A Comment</h4>
                <form className="col-sm-12 col-md-6 "  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" onChange={this.handleChange} value={this.state.name} className="form-control" id="name" placeholder="First Name" required/>
                         
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" onChange={this.handleChange} value={this.state.comment} rows="5" id="comment" placeholder="Type here..." required></textarea>
                        </div>
                        <button type="submit" className="btn comment-btn">Send</button>
                  
               </form>

               <div className="comments mt-5">
                   <h4>Comments ({this.props.comments && this.props.comments.length})</h4>
                   <div>
                       {this.props.comments && this.props.comments.map(e => {
                           return(
                              < Comment key={e.id} comment={e}/>
                           )
                       })}
                       
                      
                   </div>

               </div>

            </div>
        )
    }
}

// Comments.propTypes = {
//     comments: PropTypes.array,
//     addComment: PropTypes.func.isRequired
   
//    };

export default(Comments)
