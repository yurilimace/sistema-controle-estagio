import React,{Component} from 'react'
import styled from 'styled-components'
import Form from '../Components/Form'

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className}>
                <StyledDiv>
                    <Form/>
                </StyledDiv>
            </div>
        )
    }
}


const StyledDiv = styled.div`
width: 550px;
display:inline-block;
text-align: center;
margin: auto;
margin-top: 1%;
height: 300px;
background-color: white;
border-radius: 10px;
`;


const StyledLogin = styled(Login)`
    width:100vw;
    height:100vh;
    background:#5e91f8;
`;

export default StyledLogin