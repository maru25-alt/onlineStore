import React, { Component } from 'react';
import PageHeader from '../../otherComponents/PageHeader';
import { Navigation } from 'components/Navbars/navigation/Navigation';
import Footer from 'components/Footer/MainFooter';


export class About extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <PageHeader title="About Us" subtitle="About Page" link="/about"/>
                <div className="my-5">

                   <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About Us</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Our Services</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Misson Statement</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Terms and Conditions</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">

                            {/* about us */}
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h2>About Us</h2>
                            <div className="row">
                                <div className="col-md-8 col-sm-10">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum elit turpis, accumsan feugiat orci rhoncus ac. Mauris ut libero sed est vulputate interdum. Duis sed molestie sem, in ultrices urna. Maecenas non diam eget tortor aliquam condimentum vel id diam. In hac habitasse platea dictumst. Etiam eget fermentum enim. Nam in ipsum posuere, lobortis felis vitae, rutrum ante. Duis tristique ac ex non mollis. Suspendisse at orci at risus fringilla laoreet nec vel justo. Suspendisse ultrices nisi eget ante ornare blandit. Phasellus vel ipsum at massa condimentum gravida quis eu metus. Maecenas et ante porta ipsum luctus fringilla.
                                    </p>
                                    <p>
                                    Aenean elementum sem quis diam rutrum, eget malesuada lectus bibendum. Vivamus porta vehicula lacus sit amet accumsan. Vivamus gravida tempus hendrerit. Proin consectetur risus velit, id tincidunt tellus condimentum sit amet. Pellentesque quis lacus finibus, tempus ante id, commodo nisl. Pellentesque molestie venenatis mollis. Vestibulum id nulla nec sapien ornare tristique.
                                    </p>
                                    <p>
                                    Sed ultricies urna eu odio lacinia, sed malesuada ligula volutpat. Nam ac metus nec nulla dapibus porta. Proin et ultrices dolor. Morbi commodo purus et nibh tincidunt, ut semper nunc tincidunt. Suspendisse leo mi, mattis at ligula eu, tincidunt semper elit. Donec placerat fermentum pellentesque. Nulla non odio et dolor blandit vehicula porta nec tellus. Duis dui leo, gravida eu faucibus eu, blandit a libero.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* our services */}
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <h2>Our Services</h2>
                          <div className="container-fluid">
                              <div className="row">
                                  
                              <div className="col">
                                  <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                    </div>
                                  </div>

                                  <div className="col">
                                  <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                    </div>
                                  </div>

                                  <div className="col">
                                  <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                    </div>
                                  </div>

                                  <div className="col">
                                  <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>

                        {/* mission statement */}
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <h2>Our Mission Statement</h2>
                          <div className="row">
                                <div className="col-md-8 col-sm-10">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum elit turpis, accumsan feugiat orci rhoncus ac. Mauris ut libero sed est vulputate interdum. Duis sed molestie sem, in ultrices urna. Maecenas non diam eget tortor aliquam condimentum vel id diam. In hac habitasse platea dictumst. Etiam eget fermentum enim. Nam in ipsum posuere, lobortis felis vitae, rutrum ante. Duis tristique ac ex non mollis. Suspendisse at orci at risus fringilla laoreet nec vel justo. Suspendisse ultrices nisi eget ante ornare blandit. Phasellus vel ipsum at massa condimentum gravida quis eu metus. Maecenas et ante porta ipsum luctus fringilla.
                                    </p>
                                    <p>
                                    Aenean elementum sem quis diam rutrum, eget malesuada lectus bibendum. Vivamus porta vehicula lacus sit amet accumsan. Vivamus gravida tempus hendrerit. Proin consectetur risus velit, id tincidunt tellus condimentum sit amet. Pellentesque quis lacus finibus, tempus ante id, commodo nisl. Pellentesque molestie venenatis mollis. Vestibulum id nulla nec sapien ornare tristique.
                                    </p>
                                    <p>
                                    Sed ultricies urna eu odio lacinia, sed malesuada ligula volutpat. Nam ac metus nec nulla dapibus porta. Proin et ultrices dolor. Morbi commodo purus et nibh tincidunt, ut semper nunc tincidunt. Suspendisse leo mi, mattis at ligula eu, tincidunt semper elit. Donec placerat fermentum pellentesque. Nulla non odio et dolor blandit vehicula porta nec tellus. Duis dui leo, gravida eu faucibus eu, blandit a libero.
                                    </p>
                                </div>
                               
                            </div>
                        </div>

                        {/* terms and conditions */}
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                           <h2>Company Policies / Terms and Conditions</h2>
                           <div className="row">
                                <div className="col-md-8 col-sm-10">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum elit turpis, accumsan feugiat orci rhoncus ac. Mauris ut libero sed est vulputate interdum. Duis sed molestie sem, in ultrices urna. Maecenas non diam eget tortor aliquam condimentum vel id diam. In hac habitasse platea dictumst. Etiam eget fermentum enim. Nam in ipsum posuere, lobortis felis vitae, rutrum ante. Duis tristique ac ex non mollis. Suspendisse at orci at risus fringilla laoreet nec vel justo. Suspendisse ultrices nisi eget ante ornare blandit. Phasellus vel ipsum at massa condimentum gravida quis eu metus. Maecenas et ante porta ipsum luctus fringilla.
                                    </p>
                                    <p>
                                    Aenean elementum sem quis diam rutrum, eget malesuada lectus bibendum. Vivamus porta vehicula lacus sit amet accumsan. Vivamus gravida tempus hendrerit. Proin consectetur risus velit, id tincidunt tellus condimentum sit amet. Pellentesque quis lacus finibus, tempus ante id, commodo nisl. Pellentesque molestie venenatis mollis. Vestibulum id nulla nec sapien ornare tristique.
                                    </p>
                                    <p>
                                    Sed ultricies urna eu odio lacinia, sed malesuada ligula volutpat. Nam ac metus nec nulla dapibus porta. Proin et ultrices dolor. Morbi commodo purus et nibh tincidunt, ut semper nunc tincidunt. Suspendisse leo mi, mattis at ligula eu, tincidunt semper elit. Donec placerat fermentum pellentesque. Nulla non odio et dolor blandit vehicula porta nec tellus. Duis dui leo, gravida eu faucibus eu, blandit a libero.
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>                  

                </div>

                <Footer/>
            </div>
        )
    }
}

export default About
