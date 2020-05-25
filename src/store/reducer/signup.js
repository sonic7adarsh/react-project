import * as actions from '../action/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    isLoading: false,
    error: null
}

const signupStart = (state,action) => {
    return updatedObject(state, {error: null, isLoading: true})
}

const signupSuccess = (state,action) => {
    return updatedObject(state, {
        error: null,
        isLoading: false
    })
}

const signupFail = (state,action) => {
    return updatedObject(state, {
        // error: action.error,
        isLoading: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SIGNUP_START:
            return signupStart(state,action)
        case actions.SIGNUP_SUCCESS:
            return signupSuccess(state,action)
        case actions.SIGNUP_FAIL:
            return signupFail(state,action)
        default:
            return state
    }
}

export default reducer