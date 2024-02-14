import logo from './logo.svg';  
import React from 'react'   
import './App.css';  
import Header from './Components/Header';  
import { Route, Routes } from 'react-router-dom';  
import Home from './Components/Home';  
import Signup from './Components/Signup';  
import Signin from './Components/Signin';  
import Counsellor from './Components/Counsellor';  
import Vistor from './Components/Vistor';  
import Appointment from './Components/Appointment';  
import Hello from './Components/Hello';
import Contact from './Components/Contact';
import ProducrCard from './Components/ProducrCard';
import ProductCatalog from './Components/ProductCatalog';
import FetchRegistration from './Components/FetchRegistration';



function App() {   
  return <React.Fragment>  
  <header>  
    <Header/>  
  </header>  
  <main>  
    <Routes>  
      <Route path='/' element={<Home/>} exact/>  
      <Route path='/signup' element={<Signup/>} exact/>  
      <Route path='/signin' element={<Signin/>} exact/>  
      <Route path='/counsellor' element={<Counsellor/>} exact/>  
      <Route path='/vistor' element={<Vistor/>} exact/>  
      <Route path='/appointment' element={<Appointment/>} exact/>
      <Route path='/contact' element={<Contact/>} exact/>
      <Route path='/producrCard' element={<ProducrCard/>} exact/>
      <Route path='/productCatalog' element={<ProductCatalog/>} exact/>
      <Route path='/FetchRegistration' element={<FetchRegistration/>} exact/>
    </Routes>  
  </main>  
  </React.Fragment>  
}  
  
export default App;