import React, {Component} from 'react'
import * as actions from '../../../store/action/index'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'

class Logout extends Component {

    componentDidMount(){
        this.props.onLogout()
    }

    render(){
        return <Redirect to="/login"/>
    }
}

const mapDispatchToProps = dispatch  => {
    return {
        onLogout : () => dispatch(actions.logout())
    }
}
export default connect(null ,mapDispatchToProps)(Logout)