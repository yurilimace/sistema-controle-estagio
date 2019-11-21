import React,{Component} from 'react'
import Input from './input'
import Button from './button'
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
                caret=':rgba(230, 233, 240, 1)'placeholder="Nome">
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Matriula">
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="RG">
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="CPF">
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="data de nascimento">
            </Input>
            <Input width='50%' height='50px' margin='10px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Curso">
            </Input>
            <Input width='50%' height='50px' margin='0px 0px 20px 0px' 
                border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                caret=':rgba(230, 233, 240, 1)'placeholder="Semestre">
            </Input>
            <div>                
                    <Button text='Proximo' margin='15px 0 0 0 ' color='#F58212' border='none' radius='5px' 
                    height='50px' width='50%' fontcolor='white' fsize='18px' />
            </div>
        </form>
        )
    }
}

export default Company