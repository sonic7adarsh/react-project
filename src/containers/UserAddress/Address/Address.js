import React,{Component} from 'react'
import classes from './Address.module.css'

class Address extends Component {
    render(){
        return(
        <div className={classes.Address}>
            <p>City:     <strong>{this.props.city}</strong></p>
            <p>Country:  <strong>{this.props.country}</strong></p>
            <p>Address:  <strong>{this.props.address}</strong></p>
            <p>State:    <strong>{this.props.state}</strong></p>
            <p>ZipCode:  <strong>{this.props.zipcode}</strong></p>
            <p>Label <strong>{this.props.label}</strong></p>
        </div>
        )
    }
} 

export default Address