import React,{Component} from 'react'
import * as actions from '../../../store/action/index'
import {connect} from 'react-redux'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './GetCategory.module.css'

class GetCategory extends Component{
   

    componentDidMount(){
        this.props.fetchData(this.props.token)
    }


    render(){
        console.log(this.props.category)
        let content = null
        content = (
            <div className = {classes.Data}>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>NAME</td>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.category.map(data => (
                         <tr key = {data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                        </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        )
       
        let spin = null
        if(this.props.isLoading){
            spin = <Spinner/>
        }
        return(
            <div className={classes.Set}>
                 <div className={classes.Spin}>
                    {spin}
                </div>
                <p><strong>Category Data....</strong></p>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        category: state.category.category,
        isLoading: state.category.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: (token) => dispatch(actions.categoryFetch(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetCategory)