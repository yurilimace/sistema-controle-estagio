import React,{useState,Component} from 'react'
import styled from 'styled-components'
import SideBar from '../Components/sideBar'
import Input from '../Components/input'
import Interform from '../Components/intershipForm'
import Companyform from '../Components/companyForm'
import Multi from '../Components/multiStepForm'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"

const Home = (props)=>{
    return(
        <div className={props.className}>
            <div >
                <SideBar/>
            </div>
            <div style={{height:'100%',width:'100%'}}>
               <Multi/>
            </div>
        </div>
    )
}






const Styledhome = styled(Home)`
    width:100vw;
    height:100vh;
    display:flex;
`;


export default Styledhome   