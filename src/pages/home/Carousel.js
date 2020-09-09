import React, { Component } from 'react';
import bg from '../../assets/img/bg-1.jpg';
//import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import {carousel} from  '../../data/products'

export class Carousel extends Component {
    render() {
       let firstSlide = carousel[1]
        return (
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bg}  className="d-block img-fluid w-100 " alt="product"/>
                        <div className="carousel-caption  d-block">
                            <div className='row'>
                            <div className="col-xl-6 col-md-4 col-xs-6 animate__animated animate__backInDown">
                                <span className='text '>In Stock</span>
                                <h3 className='title'>{firstSlide.description}</h3>
                                <h6 className="price"><s className="old-price text-muted">{firstSlide.oldPrice} </s><span className="new-price">{firstSlide.newPrice} <sup>00</sup></span></h6>
                                <a  href={firstSlide.link} className="btn  order-btn">Buy Now</a>
                            </div>
                            <div className="col-xl-6 col-md-8 d-none d-sm-block animate__animated animate__bounceInRight " >
                                <img className="img-fluid" src={firstSlide.img} alt="product"></img>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    {carousel && carousel.map(e => {
                        return(
                            <div className="carousel-item " key={e.id}>
                                 <img src={bg}  className="d-block img-fluid w-100 " alt="product"/>
                                <div className="carousel-caption  d-block">
                                <div className='row'>
                                <div className="col-xl-6 col-md-4 col-xs-6 animate__animated animate__backInDown">
                                    <span className='text '>In Stock</span>
                                    <h3 className='title'>{e.description}</h3>
                                    <h6 className="price"><s className="old-price text-muted">{e.oldPrice} </s><span className="new-price">{e.newPrice} <sup>00</sup></span></h6>
                                    <a href={e.link}className="btn  order-btn">Buy Now</a>
                                </div>
                                <div className="col-xl-6 col-md-8 d-none d-sm-block animate__animated animate__bounceInRight " >
                                    <img src={e.img} className="img-fluid" alt="product"></img>
                                </div>
                            </div>
                            
                        </div>

                            </div>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
          
        )
    }
}

// Carousel.propTypes = {
//     posts: PropTypes.array.isRequired
//   };

// const mapStateToProps = (state) => ({
//     posts: state.productsReducer.carousel
// })

export default (Carousel)
