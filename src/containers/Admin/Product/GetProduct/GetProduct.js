import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../../store/action/index'
import classes from './GetProduct.module.css'
import Button from '../../../../components/UI/Button/Button'
import Spinner from '../../../../components/UI/Spinner/Spinner'

class GetProduct extends Component {

    componentDidMount(){
        this.props.fetch(this.props.token)
    }

    activateHandler = (id,event) => {
        event.preventDefault()
        this.props.activate(this.props.token, id)
    }


    deactivateHandler = (id) => {
        console.log('products')
        this.props.deActivate(this.props.token, id)
    }

    viewHandler = (id) => {
        this.props.productData(this.props.token, id)
    }



    render(){
        let addcontent = null
        if(this.props.product.length>0){
        addcontent = (
            <div className = {classes.Customer}>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>NAME</td>
                            <td>CATEGORY ID</td>
                            <td>CATEGORY NAME</td>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.product.map(da => (
                         <tr key = {da.id}>
                            <td>{da.id}</td>
                            <td>{da.name}</td>
                            <td>{da.category.id}</td>
                            <td>{da.category.name}</td>
                        </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        )}
        // -------------------------------------------
        let content = null
        content = (
            <div className = {classes.Customer}>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>NAME</td>
                            <td>BRAND</td>
                            <td>DESCRIPTION</td>
                            <td>IS_ACTIVE</td>
                            <td>ACTIVATE</td>
                            <td>DEACTIVATE</td>
                            <td>VIEW</td>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.data.map(da => (
                         <tr key = {da.id}>
                            <td>{da.id}</td>
                            <td>{da.name}</td>
                            <td>{da.brand}</td>
                            <td>{da.description}</td>
                            <td>{String(da.active)}</td>
                            <td><Button btnType="Danger" clicked={this.activateHandler.bind(this,da.id)}>Activate</Button></td>
                            <td><Button btnType="Danger" clicked={this.deactivateHandler.bind(this,da.id)}>De-Activate</Button></td>
                            <td><Button btnType="Success" clicked={this.viewHandler.bind(this,da.id)}>VIEW</Button></td>
                        </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        )
        if(this.props.isLoading){
            content = <Spinner/>
        }
        let label = null
       
        return(
            <div className={classes.Get}>
                {content}
                {addcontent}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        isLoading: state.product.loading,
        data: state.product.productFetched,
        product: state.product.productData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetch: (token) => dispatch(actions.productfetch(token)),
        activate: (token,id) => dispatch(actions.productActivate(token,id)),
        deActivate: (token,id) => dispatch(actions.productDeactivate(token,id)),
        productData: (token, id) => dispatch(actions.productDetail(token,id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetProduct)