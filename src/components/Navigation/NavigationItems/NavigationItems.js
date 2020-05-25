import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        {props.isAuth
        ? <NavigationItem link="/wish-list" >Wish List</NavigationItem>
        : <NavigationItem link="/sign-up" >Sign Up</NavigationItem>}
        {props.isAuth 
        ? <NavigationItem link="/logout" >Logout</NavigationItem>
        : <NavigationItem link="/login" >Login</NavigationItem>}
        
    </ul>
);

export default navigationItems;