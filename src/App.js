import "./AppStyle.css";
 
import "./AppSideBar"
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import {AppSideBar} from './AppSideBar';
import { IconContext } from "react-icons/lib";
import AuthService from "./services/auth.service"


      
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

        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            {currentUser ?(
                      <div>
                        <li><Link to="/profile">profile</Link></li>
                        <li><a href='/' onClick={logOut}> LogOut</a></li>
                      </div>
                ):(
                        <>
                        
                        </>      
            )}
        </div>
        <nav className={sidebar ? 'navi-menu active': 'navi-menu'}>
            <ul className="nav-menu-items list-unstyled " onClick={showSidebar}>
                <li className="navibar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {/* <li>
                  <Link to="/" className="">
                   <AiIcons.AiFillHome/>
                    Login
                  
                  </Link>
                </li> */}
                {showAdminBoard&&(
                  <li>
                  <Link to="/admin" className="nav-text">
                    <AiIcons.AiFillHome/>
                    Admin
                   </Link>
                </li>
                )}
                

                {/* <li>
                <Link to="/profile" className="nav-text">
                  
                  <AiIcons.AiFillHome/>
                    Profile
                    
                  </Link>
                </li> */}
                
                {showTeacherBoard &&(
                  <li>
                    <Link to="/teacher" className="nav-text">
                      <AiIcons.AiFillHome/>
                      teacher
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
                
                {/* {currentUser ?(
                      <div>
                        <li><Link to="/profile">profile</Link></li>
                        <li><a href='/' onClick={logOut}> LogOut</a></li>
                      </div>
                ):(
                      
                        <>
                        <li><Link to='/login'>Login</Link></li>
                        </>
                      
                    )} */}
                
            </ul>

        </nav>
        </IconContext.Provider>
        </> 
    );
}

export default App;