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