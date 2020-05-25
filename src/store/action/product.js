import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchStart = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_START
    }
}

export const fetchSuccess = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_SUCCESS
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
        axios.get('http://localhost:8080/e-commerce/customer/home/all-products')
        .then(response => {
            console.log(response.data)
            dispatch(fetchSuccess())
        })
        .catch( err => {
            console.log(err)
            dispatch(fetchFail())
        })
    }
}