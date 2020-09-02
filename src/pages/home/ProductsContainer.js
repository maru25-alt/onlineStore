import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Posts  from '../../otherComponents/Posts';


class ProductsContainer extends Component {
    render() {
        return (
            <div>
                  <ul className="nav sticky-top categories-navigation nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="badge badge-info active p-3 m-2"
                             id="pills-home-tab" 
                             data-toggle="pill" 
                             href="#pills-home" 
                             role="tab" 
                             aria-controls="pills-home" 
                             aria-selected="true">
                                 All
                           </a>
                        </li>
                        {this.props.categories && this.props.categories.map(e => {
                               return(
                                <li className="nav-item" key={e.id}>
                                   <a 
                                    className=" badge badge-info p-3 m-2" 
                                    id={`pills-${e.id}-tab` }
                                    data-toggle="pill" 
                                    href={`#pills-${e.id}`}
                                    role="tab"
                                    aria-controls={`pills-${e.id}`}
                                    aria-selected="false"
                                      >
                                          {e.title}
                                   </a>
                                </li>
                               )
                        })}
                    </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                       <Posts  products={this.props.products}/>
                    </div>
                    {this.props.categories && this.props.categories.map(e => {
                          return(
                            <div  key={e.id} className="tab-pane fade" 
                            id={`pills-${e.id}`} 
                            role="tabpanel" 
                            aria-labelledby="pills-profile-tab">
                                <Posts  products={this.props.products}/>
                           </div>
                          )
                      })
                    }
                   
                </div>
            </div>
        )
    }
}




ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired
  };


export default (ProductsContainer)
