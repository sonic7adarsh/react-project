import React, {Component} from 'react'
import Detail from '../Detail/Detail'
import Address from '../AddressDetail/Address'
import classes from './SellerSignUp.module.css'

class SellerSignUp extends Component {
    render(){
        return(
            <div className = {classes.Seller}>
                    <Detail/>
                    <Address/>
            </div>
        )
    }
}

export default SellerSignUp