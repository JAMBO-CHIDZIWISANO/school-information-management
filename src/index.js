import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BoardAdmin from './components/BoardAdmin';
import BoardParent from './components/BoardParent';
import BoardStudent from './components/BoardStudent';
import BoardTeacher from './components/BoardTeacher';
import BoardUser from './components/BoardUser';

//import { AuthProvider } from './components/context/AuthProvider';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Login from './components/Login';
//import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(

    <Router>
      <Routes>
        {/*home page*/}
        <Route path='/' element={<App/>}/>

        {/* login route where user are authenticated*/}
        <Route path='/login' element={<Login/>}/>

        {/*the protected boards of the users after logged in*/}
        <Route path='/admin' element={<BoardAdmin/>}/>
        <Route path='/teacher' element={<BoardParent/>}/>
        <Route path='/student' element={<BoardStudent/>}/>
        <Route path='/parent' element={<BoardTeacher/>}/>
      </Routes>
    </Router>,

   


  document.getElementById('root')
);

