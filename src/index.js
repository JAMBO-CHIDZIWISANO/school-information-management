
//importing dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//importing css that style whole web
import './index.css';

//import board users files
import App from './App';
import Login from "./Login"
import BoardAdmin from "./Components/BoardAdmin";
import BoardStudent from "./Components/BoardStudent";
import BoardParent from "./Components/Parent/BoardParent";
import BoardUser from "./Components/BoardUser";
import Profile from "./Components/Profile";

//import files for parents functional web requirements
import AddSDParents from './Components/AdminPanel/AddSDParents';
import DisplayParents from './Components/AdminPanel/DisplayParents';

//importing files for announcement and notices
import NoticeBoard from './Components/NoticeBoard';
import SmisComments from './Components/SmisComments';
import PostComments from './Components/PostComments'
import PostList from './Components/AdminPanel/postList';
import EditComments from './Components/EditComments';



//files for subjects managements
import SubjectList from './Components/AdminPanel/SubjectList';
import ManageSubjects from './Components/AdminPanel/ManageSubjects'
import AddSubject from './Components/AdminPanel/AddSubject'

import BoardTeacher from "./Components/BoardTeacher";
import TeacherTabPanel from './Components/teacherPanel/TeacherTabPanel'

//files for teacehers managements
import ViewTeachers from './Components/AdminPanel/ViewTeachers'
import AddTSecurityDetails from './Components/TeachersDetails/AddTSecurityDetails';

//files for students managements
import StudentsDetailsPanel from './Components/StudentDetails/StudentsDetailsPanel';
import ExamsRecords from "./Components/StudentDetails/StudentsExamResults"
import AddStudent from './Components/StudentDetails/SSecurityDetailsForm';
import Showtimetable from './Components/timetable/Showtimetable';
 

ReactDOM.render(

  // routers for routing throughout the website
    <Router>
        <App />
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<BoardAdmin/>} />
        <Route path="/teacher" element={<TeacherTabPanel/>} />
        <Route path="/student" element={<BoardStudent/>} />
        <Route path="/parent" element={<BoardParent/>} />

        <Route path="/comments" element={<BoardUser/>} />
        <Route path="/admin/announcements" element={<NoticeBoard/>} />
        <Route path='/view-posts' element={<SmisComments/>}/>
        <Route path='/postComments/:smisPostsId' element={<PostComments/>}/>
        <Route path='/postComments' element={<PostComments/>}/>
        <Route path='/viewcomments' element={<SmisComments/>}/>
        <Route path='/admin/manage-posts' element={<PostList/>} />
        <Route path='/admin/editComments' element={<EditComments/>} />
        <Route path='/editComments' element={<EditComments/>} />
        

        <Route path="/view-subjects" element={<SubjectList/>} />
        <Route path="/admin/manage-subjects" element={<ManageSubjects/>} />
        <Route path="/admin/addSubject" element={<AddSubject/>} />
        
        <Route path="/admin/teacher-record" element={<ViewTeachers/>} />
        <Route path="/admin/add-sdteacher" element={<AddTSecurityDetails/>} />

        <Route path="/admin/students-details" element={<StudentsDetailsPanel/>}/>
        <Route path='/admin/add-student' element={<AddStudent/>}/>
        <Route path="/admin/exam-records" element={<ExamsRecords/>}/>

        <Route path='/admin/add-sdparent' element={<AddSDParents/>}/>
        <Route path='/admin/parents-records' element={<DisplayParents/>}/>

        <Route path='/admin/generate-timetable' element={< Showtimetable />}/>

      </Routes>
    </Router>,
    
  document.getElementById('root')
);