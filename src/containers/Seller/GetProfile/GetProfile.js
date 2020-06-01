import React,{Component}  from 'react'
import {connect} from 'react-redux'
// import picture from '../../../assets/images/pic3.jpg'
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
        let profile = this.props.data.map(profiled => (
            <div className={classes.Seller} key={profiled.id}>
                <div className={classes.Dp}>
                    <img src={require(`../../../assets/images/${profiled.profile}`)} alt='profile dp'/>
                </div>
                <div className={classes.Data}>
                    <p>FirstName:      <strong>{profiled.firstName}</strong></p>
                    <p>MiddleName:     <strong>{profiled.middleName}</strong></p>
                    <p>LastName:       <strong>{profiled.lastName}</strong></p>
                    <p>Email:          <strong>{profiled.email}</strong></p>
                    <p>Gst:            <strong>{profiled.gst}</strong></p>
                    <p>companyName:    <strong>{profiled.companyName}</strong></p>
                    <p>companyContact: <strong>{profiled.companyContact}</strong></p>
                    <p>Addresses ID:   <strong>{profiled.addresses[0].id}</strong></p>
                    <p>City:           <strong>{profiled.addresses[0].city}</strong></p>
                    <p>State:          <strong>{profiled.addresses[0].state}</strong></p>
                    <p>Country:        <strong>{profiled.addresses[0].country}</strong></p>
                    <p>Address:        <strong>{profiled.addresses[0].address}</strong></p>
                    <p>Zipcode:        <strong>{profiled.addresses[0].zipCode}</strong></p>
                    <p>Label:          <strong>{profiled.addresses[0].label}</strong></p>

                </div>
                
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