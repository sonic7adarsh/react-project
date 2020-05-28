import React,{Component} from 'react'
import Product from '../../components/Product/Product'
import * as actions from '../../store/action/index'
import {connect} from 'react-redux'
import classes from './ProductVariation.module.css'

class ProductVariation extends Component {

    clickHandler =(productId) => {
        console.log(productId)
        this.props.productVariation(productId)
    }

    render(){
        console.log(this.props.variationList)
        return(
            <div className={}>
                <Product clicked={this.clickHandler}/>

                {this.props.variationList.map(variation => (
                    console.log(variation)
                // <ul key={address.id}>
                //     <li><span>{address.state}</span></li>
                //     <li><span>{address.city}</span></li>
                //     <li><span>{address.country}</span></li>
                //     <li><span>{address.address}</span></li>
                //     <li><span>{address.zipCode}</span></li>
                //     <li><span>{address.label}</span></li>
                //     <div>
                //         <Button btnType = "Danger" clicked={this.deleteHandler.bind(this, address.id)}>Delete Address</Button>
                //         <Button btnType = "Danger" clicked={this.updateHandler}>Update Address</Button>
                //     </div>
                // </ul>
                ))}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        variationList: state.variation.productVariation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productVariation: (id) => dispatch(actions.productVariation(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductVariation)