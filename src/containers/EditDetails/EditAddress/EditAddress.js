import React,{Component} from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import classes from './EditAddress.module.css'
import {updatedObject} from '../../../shared/utility'
import {Redirect} from 'react-router'
import axios from 'axios'

class EditAddress extends Component {
    state = {
        controls: {
            city:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter name of the city'
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            state:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter name of the state'
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter name of the country'
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            zipcode:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your ZipCode'
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            address:{
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter the address'
                },
                value: '',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            label:{
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value: 'home', displayValue: 'Home'},
                        {value: 'work', displayValue: 'Work'}
                    ]
                },
                value: 'home',
                validation:{
                    required: true,
                },
                valid: false,
                touched: false
            },
            
        },
        isUpdated: false
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updatedObject(this.state.controls,{
            [controlName]: updatedObject(this.state.controls[controlName],{
                value: event.target.value,
            })
        }) 
       this.setState({
           controls: updatedControls
       })
    }

    onSubmitHandler = (addressId) => {
        // event.preventDefault()
        axios({
            method: 'Put',
            url: `http://localhost:8080/e-commerce/customer/home/update-address/${addressId}`,
            data:{
                state: this.state.controls.state.value,
                city: this.state.controls.city.value,
                country: this.state.controls.country.value,
                address: this.state.controls.address.value,
                zipCode: this.state.controls.zipcode.value,
                label: this.state.controls.label.value
            },
            headers: {'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
        .then(response => {
            this.setState({
                isUpdated: true
            })
            console.log(response)
        }).catch( err => {
            console.log(err.response)
        })
    }

    render(){
        let addressElementArray = [];
        for( let key in this.state.controls){
            addressElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let address = addressElementArray.map(addressElement => (
            <Input
                key= {addressElement.id}
                elementType={addressElement.config.elementType}
                elementConfig={addressElement.config.elementConfig}
                value={addressElement.config.value}
                changed={(event) => this.inputChangedHandler(event,addressElement.id)}/>
          
        ))

        let content = null
        if(!this.state.isUpdated)
        {
            content =(
                <div className={classes.Detail}>
                    <p>Please Enter the Address Detail For Updation</p>
                    <form>
                        {address}
                    </form>
                        {this.props.addressData.map(address => (
                         <ul key={address.id}>
                        <li><span>{address.state}</span></li>
                        <li><span>{address.city}</span></li>
                        <li><span>{address.country}</span></li>
                        <li><span>{address.address}</span></li>
                        <li><span>{address.zipCode}</span></li>
                        <li><span>{address.label}</span></li>
                        <div>
                            <Button btnType = "Danger" clicked={this.onSubmitHandler.bind(this, address.id)}>Update Address {address.label}</Button>
                        </div>
                     </ul>
                    ))}
                    
                    
                </div>
            ) 
        }else{
            content = <Redirect to= "/updated"/>
        }
        return content
    }
}

const mapSateToProps = state => {
    return{
        token: state.auth.token,
        addressData: state.profile.addressData
    }
}


export default connect(mapSateToProps)(EditAddress)