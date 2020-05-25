import React, {Component} from 'react'
import {updatedObject} from '../../../shared/utility'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './Address.module.css'

class Address extends Component {
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
                    type: 'tel',
                    placeholder: 'Please enter your number'
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
                    type: 'address',
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
        return(
            <div className={classes.Detail}>
                <p>Please Enter the Address Detail</p>
                <form>
                    {address}
                    <Button btnType ="Success">Submit</Button>
                </form>
                
            </div>
        )
    }
}

export default Address