import {useState} from 'react' 
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'  
import AddHomeIcon from '@mui/icons-material/AddHome';  
import {NavLink} from 'react-router-dom' 
import logo from '../Images/logo1.png'
import React from 'react'  
import (AppBar)  
const Header = () => {  
  const [value,setValue]=useState() 
  return (  
    <div>  
      <AppBar sx={{backgroundColor:'black'}} position='sticky'>  
      <Toolbar>  
      <img src ={logo} width={75}/> 
      <Typography variant="h4" sx={{flexGrow:1,color:'white'}}><strong>Online Exam Portal</strong></Typography> 
 
      <Tabs sx={{m1:'auto'}} textColor='inherit' indicatorColor='primary'  
      value={value} onChange={(e,val)=>setValue(val)} > 
        <Tab LinkComponent= {NavLink}to='/signup' label='SignUp'/>  
        <Tab LinkComponent= {NavLink}to='/signin'label='Login'/>  
        <Tab LinkComponent= {NavLink}to='/counsellor'label='Counsellor'/>  
        <Tab LinkComponent= {NavLink}to='/appointment'label='Appointment'/>  
        <Tab LinkComponent= {NavLink}to='/vistor'label='visitor'/>  
        <Tab LinkComponent= {NavLink}to='/contact'label='Contact'/>
        <Tab LinkComponent= {NavLink}to='/ProductCatalog'label='ProductCatalog'/>
        <Tab LinkComponent= {NavLink}to='/ProducrCard'label='ProducrCard'/>
        <Tab LinkComponent= {NavLink}to='/FetchRegistration'label='FetchRegistartion'/>
        
      </Tabs>  
      </Toolbar>  
      </AppBar>  
  
    </div>  
  
  )  
}  
  
export default Header