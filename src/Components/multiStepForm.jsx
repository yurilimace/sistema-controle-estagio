import React,{Component} from 'react'
import Intership from '../Components/intershipForm'
import Company from '../Components/companyForm'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
class MultiStepForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            step:0,
            aluno:{name:'',matricula:'',rg:'',cpf:'',data_nasc:'',curso:'',semestre:''},
            empresa:{name:'',ramo:'',cnpj:'',end:'',tel:'',email:''},
            intership:{supervisor:'',horario:'',d_start:'',d_end:'',remun:'',atividade:''}
        }
    }

    addStep = () =>{
        this.setState({...this.state,step:1})
    }

    removeStep = () =>{
        this.setState({...this.state,step:0})
    }

    handleChange = (event) =>{
        if(this.state.step == 0){
          
           this.setState({aluno:Object.assign({},this.state.aluno,{[event.target.name]:event.target.value})})
       }
       if(this.state.step == 1){
         console.log("entrou")
         this.setState({empresa:Object.assign({},this.state.empresa,{[event.target.name]:event.target.value})})
       }
       console.log(this.state)
      
     }

     handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    render(){
       return(
         <div>
             {(this.state.step ==0) ? <Intership handleSubmit={this.handleSubmit} handleChange={this.handleChange} addStep={this.addStep} /> 
             : <Company  handleSubmit={this.handleSubmit} handleChange={this.handleChange} removeStep={this.removeStep} />} 
         </div>
       )
    }
}
export default MultiStepForm