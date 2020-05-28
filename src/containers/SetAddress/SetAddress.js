import React,{Component} from 'react'
import {updatedObject} from '../../shared/utility'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './SetAddress.module.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'

class SetAddress extends Component {
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

    onSubmitHandler = (event) => {
        event.preventDefault()
        axios({
            method: 'Post',
            url: 'http://localhost:8080/e-commerce/customer/home/save-address',
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
                    <p>Please Enter the Address Detail</p>
                    <form>
                        {address}
                        <Button btnType ="Success" clicked={this.onSubmitHandler}>Submit</Button>
                    </form>
                    
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

export default connect(mapSateToProps)(SetAddress)