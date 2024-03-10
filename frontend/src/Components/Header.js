import {useState} from 'react'  
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'  

import AddHomeIcon from '@mui/icons-material/AddHome' 
import {NavLink} from 'react-router-dom' 
import logo from  '../Images/logo1.png'  
import React from 'react' 
import (AppBar)   
const Header = () => {   
  const [value,setValue]=useState()  
  return (   
    <div>   
      <AppBar sx={{backgroundColor:'black'}} position='sticky'>   
      <Toolbar>   
      <Typography><img src ={logo} alt='logo' 
       style={{ width: '75px', height: 'auto' }} // Adjust the width as needed 
       /> 
       </Typography>   
      <Typography variant="h6" sx={{flexGrow:1,color:'white'}}><strong>Online Exam Portal</strong></Typography>  
      <Tabs sx={{m1:'auto'}} textColor='inherit' indicatorColor='primary'   
        value={value} onChange={(e,val)=>setValue(val)} >  
        <Tab LinkComponent= {NavLink}to='/signup' label="Signup"/>   
        <Tab LinkComponent= {NavLink}to='/signin'label="Signin"/>
        <Tab LinkComponent={NavLink}to='/About'label="About"/>
        <Tab LinkComponent= {NavLink}to='/FetchRegistration'label="FetchRegistration"/> 
        
       
        <Tab LinkComponent= {NavLink}to='/ExamDetails'label="ExamDetails"/> 
        <Tab LinkComponent= {NavLink}to='/ExamList'label="ExamList"/> 
        
        <Tab LinkComponent= {NavLink}to='/courses'label="courses"/> 
        <Tab LinkComponent= {NavLink}to='/ExamCreationForm'label="ExamCreationForm"/>
        <Tab LinkComponent= {NavLink}to='/Logout'label="Logout"/> 
        
        
        

      </Tabs>   
      </Toolbar>   
      </AppBar>   
   
    </div>   
   
  )   
}   
   
export default Header