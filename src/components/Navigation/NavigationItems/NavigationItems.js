import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        {props.isAuth
        ? <NavigationItem link="/my-profile" >My Profile</NavigationItem>
        : <NavigationItem link="/items" >Trending Items</NavigationItem>}
        {props.isAuth 
        ? <NavigationItem link="/logout" >Logout</NavigationItem>
        : <NavigationItem link="/login" >Login</NavigationItem>}
        {props.isAuth 
        ? <NavigationItem link="/add-address" >Add Address</NavigationItem>
        : null}
        {props.isAuth 
        ? <NavigationItem link="/edit-profile" >Edit Profile</NavigationItem>
        : null}

        {props.isAuth 
        ? <NavigationItem link="/admin/sellers" >All Sellers</NavigationItem>
        : null}
        {props.isAuth 
        ? <NavigationItem link="/admin/customers" >All Customers</NavigationItem>
        : null}
         {props.isAuth 
        ? <NavigationItem link="/add-metadata" >MetaData Field</NavigationItem>
        : null}

        {props.isAuth 
        ? <NavigationItem link="/get-metadata" >Get MetaData</NavigationItem>
        : null}

        {props.isAuth 
        ? <NavigationItem link="/get-category" >Get Category</NavigationItem>
        : null}
    </ul>
);

export default navigationItems;