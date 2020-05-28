import React, {Component} from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {updatedObject} from '../../../shared/utility'
import classes from './EditProfile.module.css'
import axios from 'axios'
import {connect} from 'react-redux'

class EditProfile extends Component{
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
            contactNo:{
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
            }
        }
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

    onAddressHandler = (event) => {
        event.preventDefault()
        this.props.history.push('/edit-profile/address')
       
    }

    onResetHandler = (event) => {
        event.preventDefault()
        this.props.history.push('/edit-profile/password')
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('edit profile ke andar se bol rha hu')
        console.log(this.props.token)
        axios({
            method: 'Put',
            url: 'http://localhost:8080/e-commerce/customer/home/update-profile',
            data:{
            firstName: this.state.controls.firstName.value,
            lastName:  this.state.controls.lastName.value,
            contactNo: this.state.controls.contactNo.value
            },
            headers: {'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
        .then(response => {
            console.log(response)
            console.log('bhai lagta hai success')
        }).catch( err => {
            console.log(err.response)
        })
    }


    render(){

        let editDetailElementArray = [];
        for( let key in this.state.controls){
            editDetailElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }


        let editDetail = editDetailElementArray.map(editDetailElement => (
            <Input
                key= {editDetailElement.id}
                elementType={editDetailElement.config.elementType}
                elementConfig={editDetailElement.config.elementConfig}
                value={editDetailElement.config.value}
                changed={(event) => this.inputChangedHandler(event,editDetailElement.id)}/>
          
        ))

        return(
            <div className={classes.EditProfile}>
                <p>Please Enter the Details</p>
                    <form>
                        {editDetail}
                    <div>
                        <Button btnType ="Danger" clicked={this.onAddressHandler}>Edit Address</Button>
                        <Button btnType ="Success" clicked={this.onSubmitHandler}>Submit</Button>
                        <Button btnType ="Danger" clicked={this.onResetHandler}>Reset Password</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(EditProfile)