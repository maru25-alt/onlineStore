import React, { Component } from 'react'
import PageHeader from '../../otherComponents/PageHeader';
import img from '../../assets/img/wechat.png';
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Footer from 'components/Footer/MainFooter';

export class Contact extends Component {
    render() {
        return (

            <div className="contact-page">
                <Navigation/>
                <PageHeader title="Contact Us" subtitle="Contact Page" link="/contact"/>
                <div className="contact-container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="contact-info">
                              <h3>Get in touch with us</h3>
                              <br></br>
                              <div>
                                  <h6><i class="fas fa-phone-alt"></i> &nbsp;Telephone</h6>
                                  <hr></hr>
                                  <ul>
                                      <li>China: +86 156 0542 6035</li>
                                      <li>Zimbabwe: +263 77 841 7806</li>
                                  </ul>
                              </div>
                              <br></br>
                              <div>
                                  <h6><i className="fas fa-envelope"></i>  &nbsp;Email Us</h6>
                                  <hr></hr>
                                  <div>
                                      <p>rudomaru25@gmail.com</p>
                                  </div>
                              </div>
                              <br></br>
                              <div>
                                  <h6><i class="fab fa-whatsapp"></i> &nbsp;Join our whatsapp group</h6>
                                  <hr></hr>
                                  <div>
                                      <img width="80" className="img-fluid" src={img} alt="qr-code"></img>
                                  </div>
                              </div>
                              <br></br>
                              <div>
                                  <h6>Follow us on social media</h6>
                                  <hr></hr>
                                  <div>
                                      <ul className="social-media d-flex ">
                                          <li ><a href="https://www.instagram.com/rudomaru25/" className="px-2"> <i className="fab fa-facebook " ></i> </a></li>
                                          <li> <a href="https://www.instagram.com/rudomaru25/" className="px-2"> <i className="fab fa-twitter " ></i> </a></li>
                                          <li> <a href="https://www.instagram.com/rudomaru25/" className="px-2"> <i className="fab fa-instagram " ></i> </a></li>   
                                      </ul>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h3>Send A Message</h3>
                            <br></br>
                        <form>
                                 <div class="form-group">
                                    <input type="text" class="form-control" id="name" placeholder="Name"/>
                                </div>
                                <br></br>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Email"/>  
                                </div>
                                <br></br>
                                <div class="form-group ">
                                   <textarea class="form-control " id="message" rows="5" placeholder="Type here..." required></textarea>
                                </div>
                              
                                <button type="submit" class="btn submit-btn px-5 float-right ">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
              <Footer/>
            </div>
        )
    }
}

export default Contact
