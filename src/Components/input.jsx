import React from 'react'
import styled from 'styled-components'

const Input = () => {
    return(
        <input/>
    )
}


const StyledInput = styled.input`
width: ${props=>props.width};
height: ${props=>props.height};
margin-bottom: ${props=>props.margin};
border:${props=>props.border};
border-radius: ${props=>props.radius};
font-size:${props=>props.fsize};
caret-color:${props=>props.caret};
padding-left:${props=>props.padding};

`;

export default StyledInput 