//import "./AppStyle.css";
 
import "./AppSideBar"
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import {AppSideBar} from './AppSideBar';
import { IconContext } from "react-icons/lib";
import AuthService from "./Components/services/auth.service"
import { Book, Dashboard, Message, PeopleAlt, Person } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";


      
function App() {

  //declaring visibility of the authenticated routes
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showStudentBoard, setShowStudentBoard] = useState(false);
  const [showParentBoard, setShowParentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  //setting up the roles of the users upon logged in to be showed unto the profile
  useEffect(()=>{
      const user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        setShowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        setShowStudentBoard(user.roles.includes("ROLE_STUDENT"));
        setShowParentBoard(user.roles.includes("ROLE_PARENT"));
      }
  }, []);

//logout user
  const logOut = () =>{
    AuthService.logout();
  };


    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (

        <div className="App">
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar" >
            <Link to="#" className="px-4">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>

            <div>
              <h2 className="text-white">SMIS</h2>
            </div>

            <div className=" ms-auto order-5">

              {currentUser ?(
                        <div className="list-unstyled ">
                          <li><Link to="/profile">
                          <MenuItem>
                            < ListItemIcon>
                              <Person fontSize="small" />
                            </ListItemIcon>
                            Profile
                          </MenuItem></Link></li>
                          <li><a href='/' onClick={logOut}> 
                          <MenuItem>
                            < ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem> 
                    </a></li>
                        </div>
                  ):(
                          <>
                          
                          </>      
              )}
            </div>
        </div>
        <nav className={sidebar ? 'navi-menu active': 'navi-menu'}>
            <ul className="nav-menu-items list-unstyled " onClick={showSidebar}>
                <li className="navibar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                       
                    </Link>
                </li>
                
                {showAdminBoard&&(
                  <li>
                  <Link to="/admin" className="nav-text">
                    <Dashboard />
                     Dashboard
                   </Link>
                </li>
                )}
                {currentUser&&(
                  <li>
                  <Link to="/comments" className="nav-text">
                    <Message/>
                  </Link>
                  <Link to="/admin/announcements" className="nav-text">
                    <Notifications/>
                    announcements
                   </Link>
                </li>
                )}
                {showAdminBoard&&(
                  <li>
                  <Link to="/admin/students-details" className="nav-text">
                    <PeopleAlt/>
                    Student Records
                   </Link>
                </li>
                )}
              

                {showAdminBoard &&(
                  <li>
                  <Link to="/admin/teachers-details" className="nav-text">
                    <PeopleAlt/>
                    Teacher Records
                   </Link>
                </li>
                )}    
                
                {currentUser &&(
                  <li>
                  <Link to="/admin/teacher-record" className="nav-text">
                    <PeopleAlt/>
                    Teacher Records
                   </Link>
                </li>
                )}
                 {showAdminBoard&&(
                  <li>
                  <Link to="/admin/parents-records" className="nav-text">
                    <PeopleAlt/>
                    Parent Records
                   </Link>
                </li>
                )}
                
                {showAdminBoard&&(
                  <li>
                  <Link to="/admin/addSubject" className="nav-text">
                    <Book/>
                    Subjects Records
                   </Link>
                </li>
                )}
                
                {showTeacherBoard &&(
                  <li>
                    <Link to="/teacher" className="nav-text">
                      <Dashboard/>
                      Teacher Dashboard
                    </Link>
                  </li>
                )}
                
                {showStudentBoard &&(
                  <li>
                    <Link to="/student" className="nav-text">
                    <AiIcons.AiFillHome/>
                      student
                    </Link>
                  </li>
                )}
                
                {showParentBoard && (
                  <li>
                    <Link to="/parent" className="nav-text">
                      <AiIcons.AiFillHome/>
                      parent
                    </Link>
                  </li>
                )}  
                
            </ul>
        </nav>
        </IconContext.Provider>
        </div> 
    );
}

export default App;