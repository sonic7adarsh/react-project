import React,{Component} from 'react'
import productImage from '../../assets/images/pic3.jpg'
import classes from './Product.module.css'

class Product extends Component {
    render(){
        return(
        <div className={classes.Product}>
            <img src={productImage} alt="product data" />
            <p>{this.props.productName}</p>
            <p>Price: <strong>USD: {Number.parseFloat(this.props.price).toFixed(2)}</strong></p>
    
        </div>
        )
    }
} 

export default Product