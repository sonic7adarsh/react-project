import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/action/index'

class Product extends Component {
    render(){
        return{

        }
    }
}
mapStateToProps = state => {
    return{
        isLoading: state.product.isLoading   
    }
}

mapDispatchToProps = dispatch => {
    return {
        products: () => dispatch(actions.product())
    }
}
export default Product