import React,{Component} from 'react'
import styled from 'styled-components'
import Input from './input'
import Button from './button'
import {Redirect,withRouter} from 'react-dom'



class Form extends Component{
    constructor(props){
        super(props)
        this.state={email:'',password:''}
    }


    handleChange = (event) =>{
        this.setState({...this.state,[event.target.name]:event.target.value})
        console.log(this.state)
    }

    //Colocar o Redirect para a proxima pagina 
    handleLogin = () =>{
        console.log('entrou')
        console.log(this.state)
        
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    render(){
        return(
            <form className={this.props.className} onSubmit={this.handleSubmit} >
                <div>
                    <Input width='80%' height='50px' 
                    margin='0px 0px 10px 0px' 
                    border='2px solid rgb(230, 233, 240)' 
                    radius ='10px' fsize='16px'
                    caret=':rgba(230, 233, 240, 1)'
                    padding='0px 0px 0px' placeholder='email' name="email" onChange={this.handleChange} 
                    onFocus={(e)=> e.target.placeholder=""} onBlur={(e) => e.target.placeholder = "email"} ></Input>
                </div>
                 <div style={{paddingTop:"6px"}} >
                    <Input width='80%' height='50px' 
                    margin='0px 0px 20px 0px' 
                    border='2px solid rgb(230, 233, 240)' 
                    radius ='10px' fsize='16px'
                    caret=':rgba(230, 233, 240, 1)'
                    placeholder='senha' name="password" onChange={this.handleChange} 
                    onFocus={(e)=> e.target.placeholder=""} onBlur={(e) => e.target.placeholder = "senha"} ></Input>
                </div>
                <div>
                    <Button text="Login" color="#00bd56" width="80%" height='50px' fsize='16px'
                     border="none" fontcolor="white" margin='13px 0px 0px 0px' Add={this.handleLogin} />
                </div>
            </form>
        )
    }
}


const Styledform = styled(Form)`
        margin-top:12%;
`;


export default Styledform