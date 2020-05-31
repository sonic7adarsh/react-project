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
            url: 'http://localhost:8080/e-commerce/admin/home/add-category',
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

export const categoryFetch =  (token,label) => {
    return dispatch => {
        dispatch(categoryFetchStart())
        axios({
            method: 'get',
            url: `http://localhost:8080/e-commerce/${label}/home/all-category`,
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


export const categoryFetchByIdStart = () => {
    return{
        type: actionTypes.CATEGORY_FETCH_BY_ID_START
    }
}

export const categoryFetchByIdSuccess = (data) => {
    return{
        type: actionTypes.CATEGORY_FETCH_BY_ID_SUCCESS,
        data: data
    }
}

export const categoryFetchByIdFail = () => {
    return{
        type: actionTypes.CATEGORY_FETCH_BY_ID_FAIL,
    }
}

export const categoryFetchById =  (token,id) => {
    return dispatch => {
        dispatch(categoryFetchByIdStart())
        axios({
            method: 'get',
            url: `http://localhost:8080/e-commerce/admin/home/get-category/${id}`,
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
            dispatch(categoryFetchByIdSuccess(fetchedData))
         }).catch( err => {
             console.log(err.response)
            dispatch(categoryFetchByIdFail())
         })
    }
}


export const categoryUpdateStart = () => {
    return{
        type: actionTypes.CATEGORY_UPDATE_START
    }
}

export const categoryUpdateSuccess = () => {
    return{
        type: actionTypes.CATEGORY_UPDATE_SUCCESS
    }
}

export const categoryUpdateFail = (error) => {
    return{
        type: actionTypes.CATEGORY_UPDATE_FAIL,
        error: error
    }
}

export const categoryUpdate =  (token,id, name) => {
    return dispatch => {
        dispatch(categoryUpdateStart())
        axios({
            method: 'Put',
            url: `http://localhost:8080/e-commerce/admin/home/update-category/${id}`,
            params:{
                name: name
            } ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
         })
        .then(response => {
            console.log('in fetch data oof customer')
            console.log(response.data)
            dispatch(categoryUpdateSuccess())
        }).catch( err => {
            console.log('in side catch')
            console.log(err.response)
            dispatch(categoryUpdateFail(err.response.data.message))
        })
    }
}

