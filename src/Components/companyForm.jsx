import React,{Component} from 'react'
import Input from './input'
import Button from './button'
import {Link} from "react-router-dom"
import FormHoC from '../Hoc/Hoc-Form'
class Company extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h3 style={{paddingTop:'25px',color:'black'}}>  Dados da Empresa  </h3>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Nome" name='name' onChange={this.props.handleChange}>
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Ramo" name='ramo' onChange={this.props.handleChange}>
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="CNPJ" name='cnpj' onChange={this.props.handleChange}>
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Endereço" name='end' onChange={this.props.handleChange}>
            </Input>
            
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Telefone" name='tel' onChange={this.props.handleChange}>
            </Input>

            <Input width='50%' height='50px' margin='10px 0px 20px 0px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Email" name='email' onChange={this.props.handleChange}>
            </Input>

            <div>   
                  
                        <Button text='Voltar' margin='15px 490px 0 0 ' color='#F58212' border='none' radius='5px' 
                        height='50px' width='10%' fontcolor='white' fsize='18px' />
                          
                    
                            
                    <Button text='Proximo' margin='15px 0 0 15px ' color='#F58212' border='none' radius='5px' 
                    height='50px' width='10%' fontcolor='white' fsize='18px' onClick={this.props.handleSubmit} />
            </div>
        </form>
        )
    }
}

export default Company