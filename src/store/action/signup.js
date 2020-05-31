import * as actionTypes from './actionTypes'
import axios from 'axios'

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signupSuccess = () => {
    return{
        type: actionTypes.SIGNUP_SUCCESS
    }
}


export const signupFail = () => {
    return{
        type: actionTypes.SIGNUP_FAIL,
    }
}

export const signup = (email,password, confirmPassword,firstName,middleName,profile,lastName,contactNo) => {
    console.log('its started')
    return dispatch => {
        dispatch(signupStart());
        const signupData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            middleName: middleName,
            profile: profile,
            lastName: lastName,
            contactNo: contactNo
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/register/register-customer',
            data: signupData,
            headers: {
                'Content-Type': 'application/json',
            }})
        .then(
            response => {
                dispatch(signupSuccess())
            }
        )
        .catch(
            err => {
                console.log(err.response.data.message)
                dispatch(signupFail())
            }
        )
    }
}

 
