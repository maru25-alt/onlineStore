import {categories, carousel, adverts,products} from '../../data/products';
import {GET_CATEGORIES, 
    GET_CAROUSEL,
     GET_ADVERTS,
    GET_PRODUCTS,
    GET_SINGLE_PRODUCT,
    ADD_LIKE,
    ADD_COMMENT
} from './types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'

export const getCategories = () => dispatch =>{
    dispatch({
        type: GET_CATEGORIES,
        payload: categories
    })
}

export const getCarousel = () => dispatch => {
    dispatch({
        type: GET_CAROUSEL,
        payload: carousel
    })
}

export const getAdverts = () => dispatch =>{
    dispatch({
        type: GET_ADVERTS,
        payload:adverts
    })
}

export const getProducts = () => dispatch =>{
    dispatch({
        type: GET_PRODUCTS,
        payload: products
    })
}

export const getSingleProduct = (id) => dispatch => {
    const product = products.filter(e => e.id == id)
   
    dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: product[0]
    })
}
export const handleLike = (value) => dispatch => {
    dispatch({
        type: ADD_LIKE,
        payload:value
    })
}


export const addComment = (comment) => dispatch => {
    var d = new Date;
   var date = moment().format(); 
    comment = {...comment, date: date, id: uuidv4() }
    dispatch({
        type : ADD_COMMENT,
        payload: comment
    })
}

