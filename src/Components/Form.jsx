import React,{Component} from 'react'
import styled from 'styled-components'
import Input from './input'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={login:'',password:''}
    }

    render(){
        return(
            <form>
                <div>
                    <Input width='80%' height='50px' 
                    margin='0px 0px 10px 0px' 
                    border='2px solid rgb(230, 233, 240)' 
                    radius ='10px' fsize='16px'
                    caret=':rgba(230, 233, 240, 1)'
                    padding='0px 0px 0px' placeholder='email'></Input>

                    <Input width='80%' height='50px' 
                    margin='0px 0px 10px 0px' 
                    border='2px solid rgb(230, 233, 240)' 
                    radius ='10px' fsize='16px'
                    caret=':rgba(230, 233, 240, 1)'
                    padding='0px 0px 0px' placeholder='senha'></Input>
                </div>
            </form>
        )
    }
}


export default Form