import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        drawerOpen: false
    }

    sideDrawerHandler = () => {
        this.setState({drawerOpen: false})
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
           return {drawerOpen: !prevState.drawerOpen}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar
                     drawerToggleClicked={this.drawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.drawerOpen} closed={this.sideDrawerHandler}/>
                    <main className={classes.Content}>
                    {this.props.children}
                    </main>
            </Aux>
        )
    }
}

export default Layout

