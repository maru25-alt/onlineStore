import React, { Component } from 'react'
import Gallery from './Gallery';
import Description from './Description';
import Comments from './Comments';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Footer from 'components/Footer/MainFooter';
import {db} from 'store/firebase/config'
import product1 from 'assets/img/fashion/img-1.jpg';
import product2 from 'assets/img/fashion/img-2.png';
import product3 from 'assets/img/fashion/img-3.png';
import product4 from 'assets/img/fashion/dress-1.jpg';
import Loading from 'otherComponents/Loading'
import { LoginString } from 'store/firebase/LoginString';

export class SinglePostPage extends Component {
    state = {
        product: {},
        isLoading: true
    }
    componentWillMount(){
      var product = {}
      db.collection("posts")
       .doc(this.props.match.params.id)
       .get()
       .then(snap => {
               this.setState({
                  product: snap.data(),
                  isLoading: false
              })
       })
       
    }
    render() {
       const {comments} = this.state.product;
       const {product, isLoading} = this.state
       const images= [
        { 
          original:product1,
          thumbnail:product1
        },
        { 
          original:product2,
          thumbnail:product2
        },
        { 
          original:product3,
          thumbnail:product3
        },
        { 
          original:product4,
          thumbnail:product4
        }
       ];
        return (
            <>
            <Navigation/>
        {isLoading ? <Loading  type="spin" color="#fff"/> :
            <div className="single-post-container">
               <div className="container-fliud">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <Gallery images={images}/>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Description product={this.state.product}/>
                        </div>
                    </div>  
                    <div>
                      <Comments comments={comments}/>
                    </div>      
               </div>
            </div>
        }
            <Footer/>
            </>
        )
    }
}

// SinglePostPage.propTypes = {
//    product: PropTypes.object.isRequired,
//    getSingleProduct: PropTypes.func.isRequired
//   };





export default (withRouter(SinglePostPage))
