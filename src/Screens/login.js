import React,{Component} from 'react'
import {Redirect} from 'react-dom'
import styled from 'styled-components'
import Form from '../Components/Form'
import Button from '../Components/button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons'




class Login extends Component{
    constructor(props){
        super(props)
        this.state = {islogged:' asdasd'}
        
    }

    handleLogin(){
        console.log(this.state)
      //  this.setState({...this.state,islogged:true})
    }

    render(){
        return(
            <div>
              {(this.state.islogged) ?  
              <div className={this.props.className} >
              <StyledIcon>
                   <FontAwesomeIcon icon={faUserGraduate} size="10x" color="white" /> 
                   <h3>  SCE </h3>
              </StyledIcon>
               <StyledDiv style={{border:'1px solid red'}}>
                   <Form handleLogin = {this.handleLogin} />
               </StyledDiv>
           </div>
                :
                <h2> 
                    Teste
                </h2>  
            
            }  
            </div>
        )
    }
}

const StyledIcon = styled.div`
display:inline-block;
position:relative;
top:-250px;
left:270px;
 
`;


const StyledDiv = styled.div`
width: 550px;
display:inline-block;
position:relative;

text-align: center;
right:5%;
top:4%;
height: 250px;
background-color:#faf5ef;
border-radius: 10px;
margin-top:22%;

`;


const StyledLogin = styled(Login)`
    width:100vw;
    height:100vh;
    background:#F58212;
`;

export default StyledLogin