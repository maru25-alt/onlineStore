import React, { Component } from 'react';
import SearchBar from './SearchBar'
import  { Posts } from '../../otherComponents/Posts'
import {withRouter} from 'react-router-dom'
import {categories, products} from '../../data/products'
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Footer from 'components/Footer/MainFooter';

export class Search extends Component {
    
    render() {
       
        return (
            <>
            <Navigation/>
            <div className="container-fluid searchbar-header">
                <h4>Results for search keyword: {this.props.match.params.query}</h4>
                <div className="searchbar-form">
                    <SearchBar categories={categories}/>
                </div>
                <div className="container-fluid">
                    <Posts products={products}/>
                </div>
          </div>
          <Footer/>
          </>
        )
    }
}



export default (withRouter(Search))
