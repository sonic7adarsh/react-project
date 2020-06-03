import React,{Component} from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import {connect} from 'react-redux'

class NavigationItems extends Component{
    render(){
        let content = null
        content =(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {this.props.isAuth 
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/login" >Login</NavigationItem>}
            </ul>)
        if(this.props.label==='admin'){
            console.log('navigate--->'+this.props.label)
            content = (
            <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {this.props.isAuth 
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/login" >Login</NavigationItem>}
            {this.props.isAuth 
            ? <NavigationItem link="/admin/sellers" >All Sellers</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/admin/customers" >All Customers</NavigationItem>
            : null}
             {this.props.isAuth 
            ? <NavigationItem link="/add-metadata" >MetaData Field</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/get-metadata" >Get MetaData</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/get-category" >Get Category</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/add-category" >Add Category</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/all-product" >All Product</NavigationItem>
            : null}
            </ul>)
        }
         if(this.props.label==='customer'){
            console.log('navigate--->'+this.props.label)
            content = (
            <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {this.props.isAuth 
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/login" >Login</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/my-profile" >My Profile</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
             {this.props.isAuth 
            ? <NavigationItem link="/add-address" >Add Address</NavigationItem>
            : null}
            {this.props.isAuth 
            ? <NavigationItem link="/edit-profile" >Edit Profile</NavigationItem>
            : null}
             {this.props.isAuth
            ? <NavigationItem link="/edit-profile/password" >ResetPassword</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/customer/category" >All Category</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
     
        </ul>)}
        if(this.props.label==='seller'){
            console.log('navigate--->'+this.props.label)
            content = (
            <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {this.props.isAuth 
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/login" >Login</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/seller-profile" >My Profile</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/updaet-seller-profile" >Update Profile</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/edit-profile/password" >ResetPassword</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/post/product" >ADD Product</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
             {this.props.isAuth
            ? <NavigationItem link="/seller/products" >My Products</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/add/product-variation" >Add variation</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            {this.props.isAuth
            ? <NavigationItem link="/get-category" >Get Category</NavigationItem>
            : <NavigationItem link="/items" >Trending Items</NavigationItem>}
            

        </ul>)}
        
        return content
    }
} 

const mapStateToProps = state => {
    return{
        label: state.auth.label
    }
}
export default connect(mapStateToProps)(NavigationItems)
    