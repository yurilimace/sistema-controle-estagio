import React,{Component} from 'react'
import StudentForm from './studentForm'
import Company from '../Components/companyForm'
import Intership from '../Components/intershipForm'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
class MultiStepForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            step:0,
            aluno:{name:'',matricula:'',rg:'',cpf:'',data_nasc:'',curso:'',semestre:''},
            empresa:{name:'',ramo:'',cnpj:'',end:'',tel:'',email:''},
            intership:{supervisor:'',horario:'',dt_start:'',dt_end:'',horario:'',salario:'',seguro:'',apolice:'',remun:'',atividade:''}
        }
    }

    addStep = () =>{
        this.setState({...this.state,step:this.state.step+1})
    }

    removeStep = () =>{
        console.log('entrou')
        this.setState({...this.state,step:this.state.step-1})
        console.log(this.state.step)
    }

    handleChange = (event) =>{
        if(this.state.step == 0){
           this.setState({aluno:Object.assign({},this.state.aluno,{[event.target.name]:event.target.value})})
           console.log(this.state.aluno)
       }
       if(this.state.step == 1){
         this.setState({empresa:Object.assign({},this.state.empresa,{[event.target.name]:event.target.value})})
         console.log(this.state.empresa)
       }

       if(this.state.step == 2){
         this.setState({intership:Object.assign({},this.state.intership,{[event.target.name]:event.target.value})})
       }
       console.log(this.state)
      
     }

     handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

   

    render(){
       let form;
       if(this.state.step == 0){
           form = <StudentForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} addStep={this.addStep} />
       }
       else if (this.state.step == 1){
           form = <Company  handleSubmit={this.handleSubmit} handleChange={this.handleChange} addStep={this.addStep} removeStep={this.removeStep} />
       }
       else {
            form = <Intership handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
       }
       return(
          <div>
              {form}
          </div>
       )
      

     
       
        
    }

}

export default MultiStepForm