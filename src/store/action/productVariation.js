import * as actionTypes from './actionTypes'
import axios from 'axios'

export const variationFetchStart = () => {
    return{
        type: actionTypes.PRODUCT_VARIATION_FETCH_START
    }
}

export const variationFetchSuccess = (products) => {
    return{
        type: actionTypes.PRODUCT_VARIATION_FETCH_SUCCESS,
        products: products
    }
}

export const variationFetchFail = () => {
    return{
        type: actionTypes.PRODUCT_VARIATION_FETCH_FAIL
    }
}

export const productVariation =  (id, token) => {
    return dispatch => {
        console.log('variation fetch start')
        dispatch(variationFetchStart())
        axios({
            method: 'Get',
            url: `http://localhost:8080/e-commerce/customer/home/product/${id}`,
            headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                console.log(response.data)
                fetcedProducts.push({
                    ...response.data[key],
                    id: key
                })
            }
            console.log(fetcedProducts)
            dispatch(variationFetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(variationFetchFail())
        })
    }
}