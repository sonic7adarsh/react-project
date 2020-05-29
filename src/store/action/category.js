import * as actionTypes from './actionTypes'
import axios from 'axios'

export const categoryPostStart = () => {
    return{
        type: actionTypes.CATEGORY_POST_START
    }
}

export const categoryPostSuccess = () => {
    return{
        type: actionTypes.CATEGORY_POST_SUCCESS
    }
}

export const categoryPostFail = (error) => {
    return{
        type: actionTypes.CATEGORY_POST_FAIL,
        error: error
    }
}

export const category =  (token, id, name) => {
    return dispatch => {
        dispatch(categoryPostStart())
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/admin/home/add-metadata-field',
            data:{
                parentId: id,
                name: name
            } ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
                }
         })
        .then(response => {
            console.log('in fetch data oof customer')
            console.log(response.data)
            dispatch(categoryPostSuccess())
        }).catch( err => {
            console.log('in side catch')
            console.log(err.response.data.message)
            dispatch(categoryPostFail(err.response.data.message))
        })
    }
}


export const categoryFetchStart = () => {
    return{
        type: actionTypes.CATEGORY_FETCH_START
    }
}

export const categoryFetchSuccess = (data) => {
    return{
        type: actionTypes.CATEGORY_FETCH_SUCCESS,
        data: data
    }
}

export const categoryFetchFail = () => {
    return{
        type: actionTypes.CATEGORY_FETCH_FAIL,
    }
}

export const categoryFetch =  (token) => {
    return dispatch => {
        dispatch(categoryFetchStart())
        axios({
            method: 'get',
            url: 'http://localhost:8080/e-commerce/admin/home/all-category',
            headers: {
                'Authorization': 'Bearer' + token
                }
         })
         .then(response => {
            const fetchedData = [];
            for( let key in response.data){
                fetchedData.push({
                    ...response.data[key],
                })
            }
            console.log(fetchedData)
            dispatch(categoryFetchSuccess(fetchedData))
         }).catch( err => {
             console.log(err.response)
            dispatch(categoryFetchFail())
         })
    }
}
