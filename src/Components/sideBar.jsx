import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Icon from './icon'
import Button from './button'
import { relative } from 'path'
const Userinfo = (props) =>{
    return(
        <div style={{height:'35vh',background:'#FFB234'}}>
             <Icon icon={faUser} color="white" size="8x" position="relative" top="30px" /> 
             <div>
                <p style={{margin:'40px 0 0 0'}}> Tipo Perfil </p>
                <p>  Nome:Usuário </p>
                <p> Curso </p>
             </div>
        </div>
    )
}

const Menu = (props)=>{
    return(
        <div style={{position:'relative',top:'50px'}}>
            <Button width='100%' height='5vh' text="Menu" color='#F58212' border='none' hover='#FFB234'/>
            <Button width='100%' height='5vh' text="Menu" color='#F58212' border='none' hover='#FFB234'/>
            <Button width='100%' height='5vh' text="Menu" color='#F58212' border='none' hover='#FFB234'/>
            <Button width='100%' height='5vh' text="Menu" color='#F58212' border='none' hover='#FFB234'/>
            <Button width='100%' height='5vh' text="Menu" color='#F58212' border='none' hover='#FFB234'/>
            <Button width='100%' height='5vh' text="Sair" color='#F58212' border='none' hover='#FFB234'/>
        </div>
    )
}


const SideBar = (props) =>{
    return(
        <div>
          <div>
            <Userinfo/>
          </div>
          <div  className={props.className}>
             <Menu/>
          </div>
        </div>

    )
}






const Styledside = styled(SideBar)`
    background: #F58212;
    height:100vh;

`;

export default Styledside;


