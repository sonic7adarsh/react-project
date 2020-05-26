import React, {Component} from 'react'
import * as actions from '../../../store/action/index'
import {connect} from 'react-redux'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Profile from '../Profile/Profile'
import classes from './CustomerProfile.module.css'
import Button from '../../../components/UI/Button/Button'
import CustomerAddress from '../../UserAddress/CustomerAddress/CustomerAddress'
import {Route} from 'react-router-dom'

class CustomerProfile extends Component {
   
    componentDidMount(){
        this.props.profileData(this.props.token);
    }

    clickHandler = () => {
        this.props.history.push('/my-profile/edit');
    }

    render(){
        let profile = this.props.data.map(profile => (
            <Profile 
            key={profile.id}
            fName={profile.firstName}
            lName={profile.lastName}
            mName={profile.middleName}
            email={profile.email}
            contactNo={profile.contactNo}/>
              ))

        let data = null 
        if(this.props.isLoading){
            data = <Spinner/>            
        }

        return(
            <div className={classes.CustomerProfile}>
                {data}
                {profile}
                <Button btnType="Success" clicked={this.clickHandler}>Show address</Button>
                <Route 
                        path={this.props.match.path + '/edit'} 
                        component={CustomerAddress}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoading: state.profile.isLoading,
        data:  state.profile.profileData,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileData: (token) => dispatch(actions.fetch(token))   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerProfile)