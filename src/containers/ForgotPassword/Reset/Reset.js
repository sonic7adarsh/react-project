import React,{Component} from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {updatedObject} from '../../../shared/utility'
import classes from './Reset.module.css'
import axios from 'axios'
import Spinner from '../../../components/UI/Spinner/Spinner'


class Reset extends Component{
    state = {
        controls: {
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter new password'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            confirmPassword:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Please enter confirm password'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            }
        },
        isUpdated: false,
        refresh: false,
        msg: null
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

    backHandler = (event) => {
        event.preventDefault()
        this.props.history.goBack();
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({isUpdated:true,
        refresh: true})
        let params = new URLSearchParams(document.location.search.substring(1));
        let token = params.get('token')
        axios({
            method: 'Put',
            url: 'http://localhost:8080/e-commerce/user/reset-password',
            params:{
                password: this.state.controls.password.value,
                confirmPassword: this.state.controls.confirmPassword.value,
                token: token
            },
            headers: {'Content-Type': 'application/json',
                }
            })
        .then(response => {
            console.log('resend link mein hu')
            console.log(response.data)
            this.setState({isUpdated: false
            ,msg: response.data,
            })
            console.log('repone'+this.state.msg)
            // this.props.history.push('/login')
        }).catch( err => {
            this.setState({
            isUpdated: false,
            msg: err.response.data.message})
            console.log('resend link mein hu')
            console.log(err.response)
        })
    }


    render(){
        let elementArray = [];
        for( let key in this.state.controls){
            elementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        

        let element = elementArray.map(ele => (
            <Input
                key= {ele.id}
                elementType={ele.config.elementType}
                elementConfig={ele.config.elementConfig}
                value={ele.config.value}
                changed={(event) => this.inputChangedHandler(event,ele.id)}/>
          
        ))
            let data = null
            if(this.state.isUpdated){
                data = <div className={classes.Spin}>
                            <Spinner/>
                        </div>
            }
            if(!this.state.isUpdated && this.state.msg && this.state.refresh){
                data = <div className={classes.Data}>
                    <p>{this.state.msg}</p>
                </div>
            }
        return(
            <div className={classes.Link}>
                {data}
                <p>Reset Password.....</p>
                <form onSubmit = {this.submitHandler}>
                    {element}
                    <Button btnType ="Danger" clicked={this.submitHandler}>Submit</Button>
                    <Button btnType ="Success" clicked={this.backHandler}>Back</Button>
                </form>
            </div>
        )
    }

    componentDidMount(){
        console.log(window.location.search)
        let params = new URLSearchParams(document.location.search.substring(1));
        let token = params.get('token')
        console.log('token-----'+token)
    }
}

export default Reset