import React, { Component } from 'react';


export class Footer extends Component {
    state= {
        year: new Date().getFullYear()
    }
    render() {
        return (
                <div className='footer '>
                    <div className='text-center'>  
                            <div className="float social-links">
                                <a href="https://www.facebook.com/rudo.mapfumba"> <i className="fab fa-facebook " ></i> </a>
                                <a href="https://twitter.com/MapfumbaRudo"> <i className="fab fa-twitter " ></i> </a>
                                <a href="https://www.instagram.com/mapfurudo/"> <i className="fab fa-google-plus " ></i> </a>
                                <a href="https://www.instagram.com/mapfurudo/"> <i className="fab fa-instagram " ></i> </a>
                                <a href="https://www.instagram.com/mapfurudo/"> <i className="fab fa-youtube " ></i> </a>
                            </div>
                            <p className="copy_right text-center">
                                Copyright &copy;{this.state.year} All rights reserved |  bmonlineshopping@gmail.com
                            </p> 
                    </div>
                </div>
           
        )
    }
}

export default Footer

