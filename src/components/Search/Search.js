import React, {Component} from 'react'
import Aux from '../../hoc/Aux/Aux'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import {updatedObject} from '../../shared/utility'
import classes from './Search.module.css'

class Search extends Component {
    state = {
        controls: {
            searchBar: {
                elementType: 'input',
                elementConfig: {
                    type: 'search',
                    placeholder: 'Hey, search here for the items ....!'
                },
                value: ''
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

    render(){

        let searchElementArray = [];
        for( let key in this.state.controls){
            searchElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        // console.log(searchElementArray)

        let search = searchElementArray.map(formElement => (
            <Input
                key= {formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                // inValid={!formElement.config.valid}
                // shouldValidate={formElement.config.validation}
                // touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event,formElement.id)}/>
          
        ))

        return(
            <Aux>
                <div className={classes.Search}>
                    <div className={classes.Input}>
                        {search}
                    </div>
                    <div className={classes.Button}>
                        <Button>Go</Button>
                    </div>
                    
                </div>

            </Aux>
        )
    }
}

export default Search