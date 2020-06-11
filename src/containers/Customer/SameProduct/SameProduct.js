import React,{Component} from 'react'
import * as actions from '../../../store/action/index'
import {connect} from 'react-redux'
import SimilarProduct from './SimilarProducts/SimilarProduct'

class SameProduct extends Component {

    clickHandler =(productId) => {
        this.props.productVariation(productId, this.props.token)
        this.props.history.push('/variation/detail')
    }

    render(){
        return(
            <div>
                <SimilarProduct clicked={this.clickHandler}/>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        variationList: state.variation.productVariation,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productVariation: (productId, token) => dispatch(actions.productVariation(productId,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SameProduct)