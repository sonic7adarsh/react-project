import React,{Component} from 'react'
import * as actions from '../../../store/action/index'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import classes from './AllCustomer.module.css'
import axios from 'axios'
import Spinner from '../../../components/UI/Spinner/Spinner'

class AllCustomers extends Component{
    state = {
        activate: false,
        deactivate: false,
        spinner: false
    }

    componentDidMount(){
        this.props.fetchCustomer(this.props.token)
    }

    activateHandler = (customerId) => {
        this.setState({
            spinner:true
        })
        axios({
            method: 'Put',
            url: `http://localhost:8080/e-commerce/admin/home/customer-activate/${customerId}`,
            headers: {
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
            .then(response => {
                this.setState({
                activate: true,
                spinner: false
            })
                console.log(response.data)
            }).catch(error => {
                this.setState({
                    spinner: false
                })
                console.log(error.response)
        });
    }

    deActivateHandler = (customerId) => {
        this.setState({
            spinner: true
        })
        axios({
            method: 'Put',
            url: `http://localhost:8080/e-commerce/admin/home/customer-de-activate/${customerId}`,
            headers: {
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
            .then(response => {
                this.setState({
                    deactivate: true,
                    spinner: false
                })
                console.log(response.data)
            }).catch(error => {
                this.setState({
                    spinner: false
                })
                console.log(error.response)
        });
    }


    render(){
        console.log('in all customer')
        console.log(this.props)
        console.log(this.props.customers)
        let content = null
        content = (
            <div className = {classes.AllCustomer}>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>EMAIL</td>
                            <td>FIRST NAME</td>
                            <td>MIDDLE NAME</td>
                            <td>LAST NAME</td>
                            <td>CONTACT NUMBER</td>
                            <td>IS_Active</td>
                            <td>ACTIVATE</td>
                            <td>DE-ACTIVATE</td>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.customers.map(customer => (
                         <tr key = {customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.email}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.middleName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.contactNo}</td>
                            <td>{String(customer.active)}</td>
                            <td><Button btnType="Success" clicked={this.activateHandler.bind(this,customer.id)}>Activate</Button></td>
                            <td><Button btnType="Danger" clicked={this.deActivateHandler.bind(this,customer.id)}>De-Activate</Button></td>
                        </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        )
        let label = null
        if(this.state.activate){
            label = <p>Seller Activated Successfully</p>
        }
        if(this.state.deactivate){
            label = <p>Seller DE-Activated Successfully</p>
        }
        let spin = null
        if(this.state.spinner){
            spin = <Spinner/>
        }
        return(
            <div className={classes.Set}>
                 <div className={classes.Spin}>
                    {spin}
                </div>
                <p><strong>All Customers....</strong></p>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        customers: state.admin.customerData,
        isLoading: state.admin.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCustomer: (token) => dispatch(actions.customer(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllCustomers)