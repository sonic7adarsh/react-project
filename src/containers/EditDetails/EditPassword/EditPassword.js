import React,{Component} from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import {updatedObject} from '../../../shared/utility'
import classes from './EditPassword.module.css'
import axios from 'axios'

class EditPassword extends Component{
    state = {
        controls: {
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'new password'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            confirmPassword:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'confirmPassword'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
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
    

    onsubmitHandler = (event) => {
        console.log('reset password mein hu')
        event.preventDefault()
        axios({
            method: 'Put',
            url: 'http://localhost:8080/e-commerce/customer/home/reset-password',
            params:{
                password: this.state.controls.password.value,
                confirmPassword: this.state.controls.confirmPassword.value,
            },
            headers: {'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
        .then(response => {
            console.log('reset password mein hu')
            console.log(response.data)
            this.setState({isUpdated: true})
        }).catch( err => {
            console.log('reset password mein hu')
            console.log(err.response)
        })
    }



    render(){
        let passwordElementArray = [];
        for( let key in this.state.controls){
            passwordElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        

        let reset = passwordElementArray.map(passwordElement => (
            <Input
                key= {passwordElement.id}
                elementType={passwordElement.config.elementType}
                elementConfig={passwordElement.config.elementConfig}
                value={passwordElement.config.value}
                changed={(event) => this.inputChangedHandler(event,passwordElement.id)}/>
          
        ))
        let content = null
        if(this.state.isUpdated){
            content = <p><strong>Password Updated Successfully</strong></p>
        }


        return (
            <div className={classes.Edit}>
                <p>Please Enter the Password .....</p>
                <form onSubmit = {this.onsigninHandler}>
                    {reset}
                    <Button btnType ="Success" clicked={this.onsubmitHandler}>Submit</Button>
                </form>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error,
    }
}


export default connect(mapStateToProps)(EditPassword)