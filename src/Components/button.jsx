import React from 'react'
import styled from 'styled-components'
const button = (props) =>{
    return(
        <button className={props.className} onClick={props.onClick}>  {props.text} </button>
    )
}

const StyledButton = styled(button)`
    width: ${props => props.width};
    height:${props=>props.height};
    margin:${props=>props.margin};
    position:${props=>props.pos};
    right:${props=>props.right};
    left:${props=>props.left};
    top:${props=>props.top};
    border:${props=>props.border};
    border-radius:${props=>props.radius};
    background-color:${props=>props.color};
    color:${props=>props.fontcolor};
    font-size:${props=>props.fsize};
    &:hover{
        background-color:${props=>props.hover};
    }
    
`;


export default StyledButton