import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from 'styled-components'
import { SSL_OP_NO_COMPRESSION } from 'constants'

const Icon = (props) =>{
    return (
        <FontAwesomeIcon className={props.className} icon={props.icon} size={props.size} color={props.color} />
    )
}

const name = (props) => {
    return(
        <div>
            Teste
        </div>
    )
}


const Styledicon = styled(Icon)`
    position:${props => props.position};
    top:${props => props.top};
`;


export default Styledicon