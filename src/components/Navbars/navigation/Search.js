import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

export class Search extends Component {
  state= {
    search: "" ,
  }
  handleChange = (e)=>{
     this.setState({
       [e.target.name]: e.target.value
     })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.search !== ''){
      this.props.history.push(`/search/${this.state.search}`)

    } 
  }

render() {
        return (
                <form onSubmit={this.handleSubmit} className="form-container my-lg-0">
                  <div className="input-group  ">
                    <input type="text" value={this.state.search} onChange={this.handleChange} name="search" className="form-control" placeholder="Enter here..." aria-label="Recipient's username" aria-describedby="search-btn"/>
                    <div className="input-group-append">
                      <button className="btn search-btn" type="submit" id="search-btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
            </form>
          
        )
    }
}

export default withRouter(Search)
