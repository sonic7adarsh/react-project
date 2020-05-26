import * as actions from '../action/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    profileData: [],
    isLoading: false,
    error: null
}

const fetchStart = (state,action) => {
    return updatedObject(state, {error: null, loading: true})
}

const fetchSuccess = (state,action) => {
    return updatedObject(state, {
        profileData: action.data,
        loading: false
    })
}

const fetchFail = (state,action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PROFILE_FETCH_START:
            return fetchStart(state,action)
        case actions.PROFILE_FETCH_SUCCESS:
            return fetchSuccess(state,action)
        case actions.PROFILE_FETCH_FAIL:
            return fetchFail(state,action)
        default:
            return state
    }
}

export default reducer