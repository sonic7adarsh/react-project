import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }

    return(
            <Aux>
                <Backdrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <div className={classes.Border}>
                      <div className={classes.Logo}>
                            <Logo/>
                        </div>
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </Aux>
    )
}

export default sideDrawer
