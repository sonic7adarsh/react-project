import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = () => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        <NavigationItem link="/auth" >Authenticate </NavigationItem>
        <NavigationItem link="/Logout" >Logout</NavigationItem> 
        
    </ul>
);

export default navigationItems;