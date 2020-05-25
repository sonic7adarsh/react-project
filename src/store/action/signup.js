import * as actionTypes from './actionTypes'
import axios from 'axios'
import qs from 'qs'

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signupSuccess = () => {
    return{
        type: actionTypes.SIGNUP_START
    }
}


export const signupFail = () => {
    return{
        type: actionTypes.SIGNUP_FAIL,
        // error: error
    }
}

export const signup = (email,password, confirmPassword,firstName,middleName,lastName,contactNo) => {
    console.log('its started')
    return dispatch => {
        dispatch(signupStart());
        const signupData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            contactNo: contactNo
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/register/register-customer',
            data:qs.stringify(signupData) ,
            headers: {
                'Content-Type': 'application/json',
                // 'Accept-language'
            }})
        .then(
            response => {
                dispatch(signupSuccess())
            }
        )
        .catch(
            err => {
                console.log(err)
                dispatch(signupFail())
            }
        )
    }
}

 
