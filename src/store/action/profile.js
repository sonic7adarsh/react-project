import * as actions from './actionTypes'
import axios from 'axios'

export const fetchStart = () => {
    return{
        type: actions.PROFILE_FETCH_START
    }
}


export const fetchSuccess = (fetchedData) => {
    return{
        type: actions.PROFILE_FETCH_SUCCESS,
        data: fetchedData
    }
}


export const fetchFail = () => {
    return{
        type: actions.PROFILE_FETCH_FAIL,
    }
}

export const fetch = (token) => {
    console.log('fetch data')
    return dispatch => {
        dispatch(fetchStart())
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/customer/home/user-profile',
            headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${token}`
                }
            })
        .then(response => {
            const fetchedData = [];
            fetchedData.push(response.data)
            dispatch(fetchSuccess(fetchedData))
        }).catch( err => {
            dispatch(fetchFail())
        })
    }
}

export const addressFetchStart = () => {
    return{
        type: actions.ADDRESS_FETCH_START
    }
}


export const addressFetchSuccess = (fetchedData) => {
    return{
        type: actions.ADDRESS_FETCH_SUCCESS,
        data: fetchedData
    }
}


export const addressFetchFail = () => {
    return{
        type: actions.ADDRESS_FETCH_FAIL,
    }
}


export const addressFetch = (token) => {
    console.log('address fetch')
    return dispatch => {
        dispatch(addressFetchStart())
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/customer/home/get-address',
            headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => {
                let fetchedData = [];
                fetchedData = [...response.data]
                console.log(response)
                console.log('success')
                console.log(fetchedData)
                dispatch(addressFetchSuccess(fetchedData))
            }).catch( err => {
                console.log(err.response)
                dispatch(addressFetchFail())
            })
    }
}

export const sellerFetch = (token) => {
    console.log('fetch data')
    return dispatch => {
        dispatch(fetchStart())
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/seller/home/user-profile',
            headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${token}`
                }
            })
        .then(response => {
            const fetchedData = [];
            fetchedData.push(response.data)
            dispatch(fetchSuccess(fetchedData))
        }).catch( err => {
            dispatch(fetchFail())
        })
    }
}
