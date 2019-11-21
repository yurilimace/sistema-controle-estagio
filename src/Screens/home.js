import React,{useState} from 'react'
import styled from 'styled-components'
import SideBar from '../Components/sideBar'
import Input from '../Components/input'
import Interform from '../Components/intershipForm'
import Companyform from '../Components/companyForm'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"

const Home = (props)=>{
    return(
        <div className={props.className}>
            <div >
                <SideBar/>
            </div>
            <div style={{border:'1px solid red',height:'100%',width:'100%'}}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/step1'>    
                            <Interform></Interform>
                        </Route>
                        <Route path='/step2'>
                            <Companyform/>
                        </Route>
                    </Switch>
                </BrowserRouter>   
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