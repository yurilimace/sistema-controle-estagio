import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    return(
        <input name={props.name} />
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
&:focus{
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238,1);
}

/*Edita o padding do placeholder do input*/

&::-webkit-input-placeholder{
    padding: 15px;
}

`;

export default StyledInput 