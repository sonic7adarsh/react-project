import * as actions from '../action/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    productVariation: [],
    isLoading: false,
    error: null
}

const variationFetchStart = (state,action) => {
    return updatedObject(state, {error: null, loading: true})
}

const variationFetchSuccess = (state,action) => {
    return updatedObject(state, {
        productVariation: action.products,
        loading: false
    })
}

const variationFetchFail = (state,action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PRODUCT_VARIATION_FETCH_START:
            return variationFetchStart(state,action)
        case actions.PRODUCT_VARIATION_FETCH_SUCCESS:
            return variationFetchSuccess(state,action)
        case actions.PRODUCT_VARIATION_FETCH_FAIL:
            return variationFetchFail(state,action)
        default:
            return state
    }
}

export default reducer