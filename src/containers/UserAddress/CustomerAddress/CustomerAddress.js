import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Address from '../Address/Address'

class CustomerAddress extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        console.log('customerAddress ke andar se bol rha hu')
        console.log(this.props.token)
        axios({
            method: 'Get',
            url: 'http://localhost:8080/e-commerce/customer/home/get-address',
            headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${this.props.token}`
                }
            })
        .then(response => {
            const fetchedData = [];
            fetchedData.push(response.data)
            console.log(response.data)
            this.setState({
                data: response.data
            })
            console.log('fetched data')
            console.log(fetchedData)
            console.log('state data')
            console.log(this.state.data)
        }).catch( err => {
            console.log(err)
        })
    }

    render(){
        let  address = this.state.data.map(add => (
            <Address
                key={add.id}
                state={add.state}
                city={add.city}
                country={add.country}
                address={add.address}
                zipcode={add.zipCode}
                label={add.label}/>
            ))
            
        return(
            <div>
               {address}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(CustomerAddress)
