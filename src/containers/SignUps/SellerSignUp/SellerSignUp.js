import React, {Component} from 'react'
import {updatedObject} from '../../../shared/utility'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './SellerSignUp.module.css'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class SellerDetail extends Component {
    state = {
        controls: {
            firstName:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your first name'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            middleName:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your middle name'
                },
                value: '',
                validation:{
                    required: false,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            lastName:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your last name'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            companyContact:{
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Please enter your number'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Please enter your email'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            profile:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter name of file'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'confirm Password'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            companyName:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your company name'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            gst:{
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Please enter gst'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
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
            }
        },
        isSignup: false
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

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({
            isSignup: true
        })
        axios({
            method: 'post',
            url: 'http://localhost:8080/e-commerce/register/register-seller',
            data: {
                email: this.state.controls.email.value,
                firstName: this.state.controls.firstName.value,
                middleName: this.state.controls.middleName.value,
                lastName: this.state.controls.lastName.value,
                profile: this.state.controls.profile.value,
                password: this.state.controls.password.value,
                confirmPassword: this.state.controls.confirmPassword.value,
                gst: this.state.controls.gst.value,
                companyContact: this.state.controls.companyContact.value,
                companyName: this.state.controls.companyName.value,
                addresses: [
                    {
                       city: this.state.controls.city.value,
                       state: this.state.controls.state.value,
                       country: this.state.controls.country.value,
                       address: this.state.controls.address.value,
                       zipCode: this.state.controls.zipcode.value,
                       label: this.state.controls.label.value
                    }
                ]
                },
            headers: {
                'Content-Type': 'application/json',
            }})
        .then(
            response => {
               console.log('successfull')
               console.log(response.data)
            }
        )
        .catch(
            err => {
                console.log(err.response.data)
                console.log('not success')
            }
        )

    }

    render(){
        let detailElementArray = [];
        for( let key in this.state.controls){
            detailElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let detail = detailElementArray.map(detailElement => (
            <Input
                key= {detailElement.id}
                elementType={detailElement.config.elementType}
                elementConfig={detailElement.config.elementConfig}
                value={detailElement.config.value}
                changed={(event) => this.inputChangedHandler(event,detailElement.id)}/>
          
        ))
        let homePath = null
        if(this.state.isSignup){
            homePath = <Redirect to = "/login" /> 
        }

        return(
            <div className={classes.Detail}>
                {homePath}
                <p>Please Enter the Details</p>
                <form onSubmit={this.submitHandler}>
                    {detail}
                    <Button btnType ="Success">Submit</Button>
                </form>
                
            </div>
        )
    }
}


export default SellerDetail