import * as actionTypes from './actionTypes'
import axios from 'axios'

export const sellerFetchStart = () => {
    return{
        type: actionTypes.SELLER_FETCH_START
    }
}

export const sellerFetchSuccess = (sellers) => {
    return{
        type: actionTypes.SELLER_FETCH_SUCCESS,
        sellers: sellers
    }
}

export const sellerFetchFail = () => {
    return{
        type: actionTypes.SELLER_FETCH_FAIL
    }
}

export const seller =  (token) => {
    return dispatch => {
        dispatch(sellerFetchStart())
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/admin/home/sellers/0',
            headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
        .then(response => {
            const fetcedSellers = [];
            for( let key in response.data){
                fetcedSellers.push({
                    ...response.data[key],
                    
                })
                // console.log()
            }
            console.log('in fetch data oof customer')
            console.log(fetcedSellers)
            dispatch(sellerFetchSuccess(fetcedSellers))
        }).catch( err => {
            console.log(err.response)
            dispatch(sellerFetchFail())
        })
    }
}


export const customerFetchStart = () => {
    return{
        type: actionTypes.CUSTOMER_FETCH_START
    }
}

export const customerFetchSuccess = (customers) => {
    return{
        type: actionTypes.CUSTOMER_FETCH_SUCCESS,
        customers: customers
    }
}

export const customerFetchFail = () => {
    return{
        type: actionTypes.CUSTOMER_FETCH_FAIL
    }
}

export const customer =  (token) => {
    return dispatch => {
        dispatch(customerFetchStart())
        // axios.get('http://localhost:8080/e-commerce/admin/home/customers/0')
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/admin/home/customers/0',
            headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
        .then(response => {
            const fetcedCustomers = [];
            for( let key in response.data){
                fetcedCustomers.push({
                    ...response.data[key],
                    
                })
                // console.log()
            }
            console.log('in fetch data oof customer')
            console.log(fetcedCustomers)
            dispatch(customerFetchSuccess(fetcedCustomers))
        }).catch( err => {
            console.log(err.response)
            dispatch(customerFetchFail())
        })
    }
}