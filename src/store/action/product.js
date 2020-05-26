import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchStart = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_START
    }
}

export const fetchSuccess = (products) => {
    return{
        type: actionTypes.PRODUCT_FETCH_SUCCESS,
        products: products
    }
}

export const fetchFail = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_FAIL
    }
}

export const product =  () => {
    return dispatch => {
        dispatch(fetchStart())
        axios.get('http://localhost:8080/e-commerce/register/home/product/18')
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                fetcedProducts.push({
                    ...response.data[key],
                    id: key
                })
            }
            console.log(fetcedProducts)
            dispatch(fetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(fetchFail())
        })
    }
}