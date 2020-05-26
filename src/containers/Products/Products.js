import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/action/index'
import Spinner from '../../components/UI/Spinner/Spinner'
import Product from '../../components/Product/Product'
import classes from './Products.module.css'


class Products extends Component {

    componentDidMount(){
        this.props.products()
    }

    render(){
            let products = this.props.fetchedProducts.map(product => (
                <Product 
                key={product.id}
                productName={product.product.name}
                price={product.price}/>
                  ))
    
            if(this.props.isLoading){
                products = <Spinner/>
            }
            return(
                <div className={classes.Products}>
                    {products}
                </div>
            );
    
    }
}
const mapStateToProps = state => {
    return{
        fetchedProducts: state.product.products,
        isLoading: state.product.isLoading   
    }
}

const mapDispatchToProps = dispatch => {
    return {
        products: () => dispatch(actions.product())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)