import React,{Component} from 'react'
import Products from '../Products/Products'
import * as actions from '../../../store/action/index'
import {connect} from 'react-redux'
import Design from './Design/Design'
// import classes from './ProductVariation.module.css'

class ProductVariation extends Component {

    clickHandler =(productId) => {
        console.log(productId)
        this.props.productVariation(productId, this.props.token)
        this.props.history.push('/variation/detail')
    }

    render(){
        return(
            <div>
                <Design/>
                <Products clicked={this.clickHandler}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductVariation)