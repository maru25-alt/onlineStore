import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class SearchBar extends Component {
    state = {
      size: '',
      price: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render() {

        const categories = this.props.categories && this.props.categories.map(e =>{
            return(
                <option key={e.id} value={e.id}>{e.name}</option>
            )
        })
        return (
           <div className="container-fluid ">
                <form className="row" onSubmit={this.handleSubmit}>
                         <div className="form-group col-md-3 ">
                            <label htmlFor="category">Category</label>
                            <select id="category" className="form-control">
                                <option defaultValue>All...</option>
                                {categories}
                            </select>
                         </div>
                         <div className="form-group col-md-3">
                            <label htmlFor="size">Sizes</label>
                            <select id="size" className="form-control" >
                                <option defaultValue>Any...</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="extra-large">Extra Large</option>
                            </select>
                        </div>
                         <div className="form-group col-md-3">
                            <label htmlFor="price">Price: {this.state.price}</label>
                            <input type="range" step="5" className="form-control-range" onChange={this.handleChange} value={this.state.price} min="5" max="10000" id="price"/>
                        </div>
                        <div className="col-md-3">
                           <button type="submit" className="btn my-btn ">Query</button>
                        </div>
                      
                    </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    categories: PropTypes.array.isRequired
  };

export default SearchBar
