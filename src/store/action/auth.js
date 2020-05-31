import * as actionTypes from './actionTypes'
import axios from 'axios'
import qs from 'qs'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token,label) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        label:label
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
        dispatch(logout())
        },expirationTime* 1000)
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email,password,label) => {
    console.log('its started '+label)
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password,
            grant_type: 'password',
            client_id: 'live-test',
            client_secret: 'abcde'
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/oauth/token',
            data:qs.stringify(authData) ,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        .then(
            response => {
                const expirationDate =new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token',response.data.access_token)
                localStorage.setItem('expirationDate',expirationDate)
                dispatch(authSuccess(response.data.access_token,label))
                // dispatch(checkAuthTimeout(response.data.expiresIn))
            }
        )
        .catch(
            err => {
                console.log(err)
                dispatch(authFail(err.response.data.error))
            }
        )
    }
}


export const setAuthRedirectPath = (path) => {
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000))
            }
        }
    }
}

 
