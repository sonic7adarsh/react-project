import React,{Component}  from 'react'
import {connect} from 'react-redux'
import picture from '../../../assets/images/pic3.jpg'
import * as actions from '../../../store/action/index'
import classes from './GetProfile.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'

class GetProfile extends Component{
    componentDidMount(){
        console.log('this.get seller data')
        this.props.profile(this.props.token)
    }
    render(){
        console.log(this.props.data)
        let profile = this.props.data.map(profile => (
            <div className={classes.Seller} key={profile.id}>
                <img src={picture} alt='profile dp'/>
                <p>FirstName:      <strong>{profile.firstName}</strong></p>
                <p>MiddleName:     <strong>{profile.middleName}</strong></p>
                <p>LastName:       <strong>{profile.lastName}</strong></p>
                <p>Email:          <strong>{profile.email}</strong></p>
                <p>Gst:            <strong>{profile.gst}</strong></p>
                <p>companyName:    <strong>{profile.companyName}</strong></p>
                <p>companyContact: <strong>{profile.companyContact}</strong></p>
                <p>Addresses ID:   <strong>{profile.addresses[0].id}</strong></p>
                <p>City:           <strong>{profile.addresses[0].city}</strong></p>
                <p>State:          <strong>{profile.addresses[0].state}</strong></p>
                <p>Country:        <strong>{profile.addresses[0].country}</strong></p>
                <p>Address:        <strong>{profile.addresses[0].address}</strong></p>
                <p>Zipcode:        <strong>{profile.addresses[0].zipCode}</strong></p>
                <p>Label:          <strong>{profile.addresses[0].label}</strong></p>

            </div>
              ))
              if(this.props.loading){
                  profile = <div className={classes.Seller}><Spinner/></div>
              }
        return(
        <div>{profile}</div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        data: state.profile.profileData,
        loading: state.profile.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        profile: (token) => dispatch(actions.sellerFetch(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetProfile)