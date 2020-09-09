import React, { Component } from 'react'
//import PropTypes from 'prop-types';
import IncreaseDecreaseInput from '../../otherComponents/Increase_Decrease_Input'
//import {connect} from 'react-redux';
//import { handleLike} from '../../store/actions/productsActions'

export class Description extends Component {
    state = {
      qty : 0,
      color: "",
      size: "",
      selectedItems : [],
      liked: false,
      cart:[],
      sizes:{

      }
    }

    handleChange = (id) => {
       if(id.includes("minus")){
         if(this.state.qty !== 0){
          this.setState({
              qty: this.state.qty - 1,
              selectedItems: this.state.selectedItems.pop()
          })
         }
         else{
          this.setState({
            qty: 0,
           })
         }
         
       }
       else if(id.includes("plus")){
          this.setState({
            qty: this.state.qty + 1,
            selectedItems: [...this.state.selectedItems, {
              size: this.state.size,
              color: this.state.color
            }]
          })
       }
       else{
         return 0;
       }
    }

    handleRadioChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleLike = () => {
       // this.props.handleLike(!this.state.liked)
        this.setState({
          liked: !this.state.liked
        })
    }

    componentDidMount(){
        const { sizes} = this.props.product
        sizes.forEach(e =>{

        })
        this.setState({
           cart: [
             {
               total: 0,
               qty: 0,

            }
           ]
        })
    }

    render() {
      const { title, description,price, moq, colors, likes,sizes} = this.props.product;
        return (
            < >
              {this.props.product && 
              <div className="post-details">
                <h3 className="post-title">{title}</h3>
                <div className="price">
                  {price.min === price.max ? `$${price.min}` : `$${price.min} - $${price.max}`}
                </div>
                <p>
                  {description}
                </p>
                <div className="">MOQ: {moq}pc </div>
             <form className="my-5">
               <div className="row">
                  <div className="col-12">
                      <label className="label">Colors</label>
                      <div className="row">
                      {colors && colors.map((e) => {
                        return (
                          <div key={e.id} className="col custom-control custom-radio">
                               <label>
                                  <input type="radio" value={e.color} onChange={this.handleRadioChange} id={`customRadio${e.id}`} name="color" className="custom-control-input"/>
                                  <img src={e.img} width="100" height="100" alt="product"></img>
                                  <div>{e.color}</div>
                               </label>
                          </div>
                        )
                      })}
                      </div>
                  </div>
                  <div className="col-12">
                       <label className="label">Size/Type</label>
                      <div className="">
                        { sizes && sizes.map((e) =>{
                              return(
                                <div className="row my-2">
                                    <div key={e.id} className="col-3 custom-control custom-radio">
                                      <label>
                                          <input type="radio" value={e.value}  id={`customRadio${e.id}`} onChange={this.handleRadioChange} name="size" className="custom-control-input"/>
                                          <div className="img">{e.value}</div>
                                      </label>
                                    </div>
                                    <div className="col-3 offset-3">
                                       <IncreaseDecreaseInput id={e.id} value={this.state.qty}  handleChange={this.handleChange} />
                                    </div>
                                    <div className="col-3">
                                       ${e.price} each
                                    </div>
                                </div>
                              )
                           })
                        }
                      </div>
                  </div>
               </div>
              
          </form>       
               <div className="row">
                   <div className="col-4 col-xs-12">
                       <button  onClick={this.handleLike} className="btn like-btn">
                         {likes} {this.state.liked ?  <i class="fas fa-heart"></i>: <i className="far fa-heart"></i>}
                      </button> 
                   </div>
                   <div className="col-4 col-xs-12">
                     <button className="btn cart-btn">Add to Cart</button>
                   </div>
                   <div className="col-4 col-xs-12">
                     <button disabled={this.state.qty < moq ? true : false}  className="btn order-btn">Order</button>
                   </div>
                </div>
            </div>
              
              }
                        
            </>
        )
    }
}


// Description.propTypes = {
//   product: PropTypes.object.isRequired,
//  };


export default  (Description)
