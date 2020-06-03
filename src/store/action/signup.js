import * as actionTypes from './actionTypes'
import axios from 'axios'

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signupSuccess = (data) => {
    return{
        type: actionTypes.SIGNUP_SUCCESS,
        data: data
    }
}


export const signupFail = (err) => {
    return{
        type: actionTypes.SIGNUP_FAIL,
        err: err
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
                dispatch(signupSuccess('authenticated'))
            }
        )
        .catch(
            err => {
                console.log(err.response.data.message)
                dispatch(signupFail(err.response.data.message))
            }
        )
    }
}


export const sellerSignup = (firstName,middleName,lastName,companyContact,email,profile,password,confirmPassword,companyName,gst,city
    ,states,country,zipcode,address,label) => {
    return dispatch => {
        dispatch(signupStart());
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/register/register-seller',
            data: {
                email: email,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                profile: profile,
                password: password,
                confirmPassword: confirmPassword,
                gst: gst,
                companyContact: companyContact,
                companyName: companyName,
                addresses: [
                    {
                       city: city,
                       state: states,
                       country: country,
                       address: address,
                       zipCode: zipcode,
                       label: label
                    }
                ]
                },
            headers: {
                'Content-Type': 'application/json',
            }})
        .then(
            response => {
               console.log('successfull')
               console.log(response.data)
               dispatch(signupSuccess('authenticated'))
            }
        )
        .catch(
            err => {
                console.log(err.response.data)
                console.log('not success')
                dispatch(signupFail(err.response.data.message))
            }
        )
    }
}

