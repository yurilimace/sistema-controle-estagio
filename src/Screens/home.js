import React from 'react'
import styled from 'styled-components'
import SideBar from '../Components/sideBar'

const Home = (props)=>{
    return(
        <div className={props.className}>
            <div >
                <SideBar/>
            </div>
            <div>
                <h2> Lembretes </h2>
            </div>
        </div>
    )
}




const Styledhome = styled(Home)`
    display:grid;
    grid-template-columns: 20vw auto auto;
`;


export default Styledhome   