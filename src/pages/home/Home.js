
 import Footer from '../../components/Footer/MainFooter';
import React, { Component } from 'react'
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Advertising from './Adverting';
import MultipleCararousel from '../../otherComponents/Display';
import { adverts} from  '../../data/products'
import ProductsContainer from './ProductsContainer'
import {db} from 'store/firebase/config'
import Loading from 'otherComponents/Loading'


export class Home extends Component {
    state={
        categories: [],
        products: [],
        isLoading: true
    }
    componentWillMount(){
    var categories = [];
       db.collection("categories")
       .onSnapshot(snap => {
            snap.forEach(doc => {
            categories.push({...doc.data(), id: doc.id});
            this.setState({
                categories
            })
          });
       });

       var products = [];
       db.collection("posts")
       .orderBy('createdAt', 'desc')
       .onSnapshot(snap => {
        snap.forEach(doc => {
          products.push({...doc.data(), id: doc.id});
          this.setState({
              products,
              isLoading: false
          })
          //console.log(posts)
        });
      });

      
       
    }
    render() {
        const {categories, products} = this.state
        return (
            <div>
                <Navigation/>
                <Navbar categories={categories}/>
                <div className="row carousel-container">
                   <div className="col-md-8 col-sm-12">
                       <Carousel/>
                   </div>
                   <div className="col-md-4 d-none d-sm-block d-sm-none d-md-block">
                       <Advertising/>
                   </div>
                </div>
                <div className='container-fluid'>
                    <MultipleCararousel posts={adverts}/>
                 </div>
                 <div className="container-fluid products-container">
                     {this.state.isLoading && <Loading type="spin" color="#ffffff" />}
                  <ProductsContainer  categories={categories} products={products}/>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Home

