import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from "./Login"
import BoardAdmin from "./Components/BoardAdmin";
import BoardTeacher from "./Components/BoardTeacher";
import BoardStudent from "./Components/BoardStudent";
import BoardParent from "./Components/BoardParent";
import BoardUser from "./Components/BoardUser";
import Profile from "./Components/Profile";

import AddSDParents from './Components/AdminPanel/AddSDParents';
import AddParent from './Components/AdminPanel/AddParent';
import DisplayParents from './Components/AdminPanel/DisplayParents';

import Announcements from "./Components/AdminPanel/Announcements"
import SubjectList from './Components/AdminPanel/SubjectList';
import ManageSubjects from './Components/AdminPanel/ManageSubjects'
import AddSubject from './Components/AdminPanel/AddSubject'

import ViewTeachers from './Components/AdminPanel/ViewTeachers'
import AddTSecurityDetails from './Components/TeachersDetails/AddTSecurityDetails';
import Display from './Components/TeachersDetails/DisplayTeachers';
import AddTeacher from './Components/TeachersDetails/AddTeacher';

import SmisComments from './Components/SmisComments';
//import StudentList from "./Components/StudentDetails/StudentList"
import StudentDetails from "./Components/StudentDetails/StudentDetails"
import ExamsRecords from "./Components/StudentDetails/ExamsRecords"
import AddStudent from './Components/StudentDetails/SSecurityDetailsForm';
import SPersonalDetailsForm from "./Components/StudentDetails/SPersonalDetailsForm"

ReactDOM.render(
    <Router>
        <App />
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<BoardAdmin/>} />
        <Route path="/teacher" element={<BoardTeacher/>} />
        <Route path="/student" element={<BoardStudent/>} />
        <Route path="/parent" element={<BoardParent/>} />
        <Route path="/comments" element={<BoardUser/>} />
        <Route path="/admin/announcements" element={<Announcements/>} />
        <Route path="/view-subjects" element={<SubjectList/>} />
        <Route path="/admin/manage-subjects" element={<ManageSubjects/>} />
        <Route path="/admin/addSubject" element={<AddSubject/>} />
        
        <Route path="/admin/viewTeachers" element={<ViewTeachers/>} />
        <Route path="/admin/teacher-record" element={<Display/>} />
        <Route path="/admin/add-sdteacher" element={<AddTSecurityDetails/>} />
        <Route path='/admin/add-tpersondetails' element={< AddTeacher/>}/>
        <Route path="/admin" element={<BoardAdmin/>} />

        <Route path="/admin/students-details" element={<StudentDetails/>}/>
        <Route path='/admin/add-student' element={<AddStudent/>}/>
        <Route path="/admin/exam-records" element={<ExamsRecords/>}/>
        <Route path="/admin/spersonal-details" element={<SPersonalDetailsForm/>} />

        <Route path='/admin/add-sdparent' element={<AddSDParents/>}/>
        <Route path='/admin/add-pdparent' element={<AddParent/>}/>
        <Route path='/admin/parents-records' element={<DisplayParents/>}/>

        <Route path='/view-posts' element={<SmisComments/>}/>


        

        

      </Routes>
    </Router>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals