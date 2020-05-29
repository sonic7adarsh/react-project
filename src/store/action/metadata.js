import * as actionTypes from './actionTypes'
import axios from 'axios'

export const metadataPostStart = () => {
    return{
        type: actionTypes.METADATA_FIELD_POST_START
    }
}

export const metadataPostSuccess = () => {
    return{
        type: actionTypes.METADATA_FIELD_POST_SUCCESS
    }
}

export const metadataPostFail = (error) => {
    return{
        type: actionTypes.METADATA_FIELD_POST_FAIL,
        error: error
    }
}
export const metadataField =  (token, data) => {
    return dispatch => {
        dispatch(metadataPostStart())
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/admin/home/add-metadata-field',
            data:{
                name: data
            } ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
                }
         })
        .then(response => {
            console.log('in fetch data oof customer')
            console.log(response.data)
            dispatch(metadataPostSuccess())
        }).catch( err => {
            console.log('in side catch')
            console.log(err.response.data.message)
            dispatch(metadataPostFail(err.response.data.message))
        })
    }
}


export const metadataValuePostStart = () => {
    return{
        type: actionTypes.METADATA_FIELD_VALUE_POST_START
    }
}

export const metadataValuePostSuccess = () => {
    return{
        type: actionTypes.METADATA_FIELD_VALUE_POST_SUCCESS
    }
}

export const  metadataValuePostFail = (error) => {
    return{
        type: actionTypes.METADATA_FIELD_VALUE_POST_FAIL,
        error: error
    }
}

export const metadataValue =  (token, id, fieldId, value) => {
    return dispatch => {
        dispatch(metadataValuePostStart())
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/admin/home/add-category-metadata-field-value',
            data:{
                categoryId: id,
                categoryMetadataFieldId: fieldId,
                value: value
            } ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
                }
         })
        .then(response => {
            console.log('data response')
            console.log(response.data)
            dispatch(metadataValuePostSuccess())
        }).catch( err => {
            console.log(err.response)
            dispatch(metadataValuePostFail(err.response.data.message))
        })
    }
}


// ---------------------------------------------------->>

export const metadataFetchStart = () => {
    return{
        type: actionTypes.METADATA_FIELD_FETCH_START
    }
}

export const metadataFetchSuccess = (data) => {
    return{
        type: actionTypes.METADATA_FIELD_FETCH_SUCCESS,
        data: data
    }
}

export const metadataFetchFail = () => {
    return{
        type: actionTypes.METADATA_FIELD_POST_FAIL,
    }
}
export const metadataFetch =  (token) => {
    return dispatch => {
        dispatch(metadataFetchStart())
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/admin/home/get-metadata-fields/0',
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
            dispatch(metadataFetchSuccess(fetchedData))
         }).catch( err => {
            dispatch(metadataFetchFail())
        })
    }
}

