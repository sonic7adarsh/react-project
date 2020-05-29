import * as actions from '../action/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    category: [],
    isLoading: false,
    error: null
}

const categoryStart = (state,action) => {
    return updatedObject(state, {error: null, isLoading: true})
}

const categorySuccess = (state,action) => {
    return updatedObject(state, {
        error: null,
        isLoading: false
    })
}

const categoryFail = (state,action) => {
    return updatedObject(state, {
        error: action.error,
        isLoading: false
    })
}

const categoryFetchStart = (state,action) => {
    return updatedObject(state, {error: null, isLoading: true})
}

const categoryFetchSuccess = (state,action) => {
    return updatedObject(state, {
        error: null,
        category: action.data,
        isLoading: false
    })
}

const categoryFetchFail = (state,action) => {
    return updatedObject(state, {
        error: action.error,
        isLoading: false
    })
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.CATEGORY_POST_START:
            return categoryStart(state,action)
        case actions.CATEGORY_POST_SUCCESS:
            return categorySuccess(state,action)
        case actions.CATEGORY_POST_FAIL:
            return categoryFail(state,action)
        case actions.CATEGORY_FETCH_START:
            return categoryFetchStart(state,action)
        case actions.CATEGORY_FETCH_SUCCESS:
            return categoryFetchSuccess(state,action)
        case actions.CATEGORY_FETCH_FAIL:
            return categoryFetchFail(state,action)
        default:
            return state
    }
}

export default reducer