import './App.css';
import React from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Invalid from './Components/Invalid';
import Success from './Components/Success';
import axios from 'axios'; 
import FetchRegistration from './Components/FetchRegistration';

import AddExam from './Components/AddExam';
import ExamDetails from './Components/ExamDetails';
import ExamList from './Components/ExamList';
import Exam from './Components/Exam';
import Courses from './Components/Courses';
import CoursesList from './Components/CoursesList';
import AllCoursesPage from './Components/AllCoursesPage';
import ExamCreationForm from './Components/ExamCreationForm';
import Logout from './Components/Logout';




function App() {
    // Function to handle delete action
    

    return (
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/home' element={<Home />} exact />
                    <Route path='/About' element={<About/>}exact/>
                    <Route path='/signup' element={<Signup />} exact />
                    <Route path='/signin' element={<Signin />} exact />
                    <Route path='FetchRegistration' element={<FetchRegistration/>} exact /> 
                    <Route path='CoursesList' element={<CoursesList/>} exact /> 
                    <Route path='/Invalid' element={<Invalid/>} exact/>
                    <Route path='/Success' element={<Success/>} exact/>
                    
                    <Route path='/AddExam' element={<AddExam/>} exact/>
                    <Route path='/Exam' element={<Exam/>} exact/>
                    <Route path='/ExamDetails' element={<ExamDetails/>} exact/>
                    <Route path='/ExamList' element={<ExamList/>} exact/>
                    <Route path='/Courses' element={<Courses/>} exact/>
                    <Route path='/AllCoursesPages' element={<AllCoursesPage/>} exact/>
                    <Route path='/ExamCreationForm' element={<ExamCreationForm/>} exact/>
                    <Route path='/Logout' element={<Logout/>} exact/>
                    
                   
                    
                    
                    
                    
                </Routes>
                {/* Example Delete Button */}
                
            </main>
            <footer>
                {/* Footer Content */}
            </footer>
        </React.Fragment>
    );
}

export default App;