import React, { Component } from 'react';
import logo from '../assets/img/footer.png'

export class Footer extends Component {
    state= {
        year: new Date().getFullYear()
    }
    render() {
        return (
           
                <footer className='footer '>
                    <div className='footer-top container-fluid'>
                        <div className='row row-content'>
                            <div className="col-sm-6 col-md-4">
                               <h6>Contacts</h6>
                             
                                <p>555-555-555</p>
                                <p>email@gmail.com</p>
                                <address>100 Street Name</address>
                            </div>
                            <div className="col-sm-6 col-md-4">
                              <h6>Our Information</h6>
                           
                              <div className='d-flex flex-column'>
                              <a href="#">Terms and Conditions</a>
                              <a href="#">Delivery Information</a>
                              <a href="#">About Us</a>
                              <a href="#">Contact Us</a>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <h6>My Account</h6>
                               
                                <div className='d-flex flex-column'>
                                <a href="#">My Cart</a>
                                <a href="#">My Account</a>
                                <a href="#">Order History</a>
                                <a href="#">Returns</a>
                                <a href="#">Newsletter</a>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='row'>
                            <div className='col-md-5 col-sm-12'>
                            <div className="float social-links">
                                <a href="#"> <i className="fab fa-facebook " ></i> </a>
                                <a href="#"> <i className="fab fa-twitter " ></i> </a>
                                <a href="#"> <i className="fab fa-google-plus " ></i> </a>
                                <a href="#"> <i className="fab fa-instagram " ></i> </a>
                                <a href="#"> <i className="fab fa-youtube " ></i> </a>
                            </div>
                            </div>
                            <div className='col-md-6 col-sm-12 subceribe-container'>
                                <div className="row">
                                    <div className='col-8'>
                                    <h6> Subscribe to our newsletter</h6>
                                    </div>
                                    <form className="form-inline my-2 my-lg-0 col-6">
                                      <div className="input-group mb-3 vw-100">
                                            <input type="text" className="form-control " placeholder="Enter your email..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-success " type="button" id="button-addon2">Submit</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom row'>  
                        <div className="col-xl-10">
                            <p className="copy_right text-center">
                                Copyright &copy;{this.state.year} All rights reserved |  bmonlineshopping@gmail.com
                            </p> 
                        </div>
                    </div>
                </footer>
           
        )
    }
}

export default Footer
