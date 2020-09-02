
import{GET_CATEGORIES,
     GET_CAROUSEL,
     GET_ADVERTS,
    GET_PRODUCTS,
    GET_SINGLE_PRODUCT,
    ADD_LIKE,
    ADD_COMMENT
    } 
    from '../actions/types'

const intialState = {
    categories: [],
    carousel: [],
    adverts: [],
    products: [],
    product: {}
}


export default function (state = intialState, action){
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case GET_CAROUSEL:
            return{
                ...state,
                carousel: action.payload
            } 
        case GET_ADVERTS:
            return{
                    ...state,
                    adverts: action.payload
                }  
         case GET_PRODUCTS:
             return{
                 ...state,
                 products: action.payload
             } 
         case GET_SINGLE_PRODUCT: 
              return{
                  ...state,
                  product: action.payload
              }  
         case ADD_LIKE:
            const newLikes = action.payload? state.product.likes + 1 : state.product.likes - 1 ;
             return{
                 ...state,
                 product: {...state.product, likes: newLikes}
             }
          case ADD_COMMENT: 
              return{
                  ...state,
                  product: {...state.product, comments: [ action.payload,...state.product.comments]}
              }                     
        default: return state;
    }
}