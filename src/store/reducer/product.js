import * as actions from '../action/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    isLoading: false,
    error: null
}

const fetchStart = (state,action) => {
    return updatedObject(state, {error: null, loading: true})
}

const fetchSuccess = (state,action) => {
    return updatedObject(state, {
        error: null,
        loading: false
    })
}

const fetchFail = (state,action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PRODUCT_FETCH_START:
            return fetchStart(state,action)
        case actions.PRODUCT_FETCH_SUCCESS:
            return fetchSuccess(state,action)
        case actions.PRODUCT_FETCH_FAIL:
            return fetchFail(state,action)
        default:
            return state
    }
}

export default reducer