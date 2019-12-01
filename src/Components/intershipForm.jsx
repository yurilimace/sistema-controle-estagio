import React,{Component} from 'react'
import styled from 'styled-components'
import Input from './input'
import Button from './button'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"

class Intershipform extends Component{
    constructor(props){
        super(props)
        
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

  

    render(){
        return(
            <div className={this.props.className}>
                <form onSubmit={this.handleSubmit}>
                    <h3 style={{paddingTop:'0px',color:'black'}}>  Sobre o Estágio  </h3>
                    <Input width='50%' height='40px' margin='10px' label={'Supervisor da Empresa'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="Supervisor" name='supervisor' onChange={this.props.handleChange}>
                    </Input>
                    <Input width='50%' height='40px' margin='10px' type='date' label={'data de inicio:'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="data inicio" name='dt_start'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='40px' margin='10px' type='date' label={'data de termino'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="fim" name='dt_end' onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='40px' margin='10px' label={'Horario'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="horario" name='horario'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='40px' margin='10px' label={'Salario'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="salario" name='salario' onChange={this.props.handleChange}>
                    </Input>
                    <Input width='50%' height='40px' margin='10px' label={'Seguradora'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="seguro" name='seguro'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='40px' margin='0px 0px 20px 0px' label={'Numero da apolice de seguro'}
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="apolice" name='apolice' onChange={this.props.handleChange} >
                    </Input>

                    <div>
                        <Button text='Proximo' margin='15px 0 0 0 ' color='#F58212' border='none' radius='5px' 
                        height='50px' width='50%' fontcolor='white' fsize='18px' onClick={this.props.handleSubmit} />  
                    </div>
                </form>
            </div>
        )
    }
}


const StyledIntership = styled(Intershipform)`
    width:70%;
    height: 80%;
    margin: 40px auto;

`;

export default  StyledIntership