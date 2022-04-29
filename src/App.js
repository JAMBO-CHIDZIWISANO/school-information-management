//importing dependencies
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Book, Campaign, Dashboard, Message, PeopleAlt, Person, Schedule, Speaker } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./AppSideBar"
import AuthService from "./Components/services/auth.service"
import { Avatar } from '@mui/material';
//navbar
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css'

//app function
function App() {

  //menu for profile and logout drop down
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  //handle menu click event
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //handle close menu event
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open , setOpen] = useState(false);

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


  //variables for side nav bar states
    // const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);
    const getUser = AuthService.getCurrentUser();
    return (
      

      <div className="App">

       
        
        {/* <IconContext.Provider value={{color: '#fff'}}> */}
        {/* <header className='wrapp'>
        <div className="navbar" >
         
            {/* closing the sidebar button
            <Link to="#" className="px-4">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link> 

             <div>
              <h2 className="text-white">SMIS</h2>
            </div> *

            <div className=" ms-auto order-5">

              
        </div>

        </header> */}
        <nav className='navbar'>
          <div onClick={() => setOpen(!open)} className="nav-icon">
            {open ? <FiX /> : <FiMenu />}
          </div>
          <Link to='#' className="nav-logo mb-3" onClick={()=>setOpen(false)}>
                    SMIS
          </Link>
          <ul className={open? 'nav-links active' : 'nav-links'}>

          {showAdminBoard&&(
              <li className='nav-item'>
              <Link to="/admin" className='nav-link' onClick={()=>setOpen(false)}>
                
                  Dashboard
                </Link>
            </li>
            )}
            {showAdminBoard&&(
            <li className='nav-item'>
              <Link to="/admin/announcements" className='nav-link' onClick={()=>setOpen(false)}>
                
                Publish News
                </Link>
            </li>
            )}
            {showAdminBoard&&(
            <li className='nav-item'>
              <Link to="/admin/students-details" className='nav-link' onClick={()=>setOpen(false)}>
                
                Student Records
              </Link>
            </li>
            )}
            {showAdminBoard &&(
            <li className='nav-item'>
              <Link to="/admin/teacher-record" className='nav-link' onClick={()=>setOpen(false)}>
                
                Teacher Records
              </Link>
            </li>
            )}    
              
            {showAdminBoard&&(
            <li className='nav-item'>
            <Link to="/admin/parents-records" className='nav-link' onClick={()=>setOpen(false)}>
              
              Parent Records
              </Link>
            </li>
            )}
            
            {showAdminBoard&&(
              <li className='nav-item'>
              <Link to="/admin/addSubject" className='nav-link' onClick={()=>setOpen(false)}>
                
                Subjects Records
                </Link>
            </li>
            )}
            
            {showTeacherBoard &&(
              <li className='nav-item'>
                <Link to="/teacher" className='nav-link' onClick={()=>setOpen(false)}>
                  
                  Teacher Dashboard
                </Link>
              </li>
            )}
            
            {showStudentBoard &&(
              <li className='nav-item'>
                <Link to="/student" className='nav-link' onClick={()=>setOpen(false)}>
               
                  Report 
                </Link>
              </li>
            )}
            {showStudentBoard &&(
              <li className='nav-item'>
                <Link to="/student/timetable" className='nav-link' onClick={()=>setOpen(false)}>
               
                  Time Table 
                </Link>
              </li>
            )}
            
            {showParentBoard && (
              <li className='nav-item'>
                <Link to="/parent" className='nav-link' onClick={()=>setOpen(false)}>
                 
                  Parent Board
                </Link>
              </li>
            )}
            {showParentBoard && (
              <li className='nav-item'>
                <Link to="/parent/childrenlist" className='nav-link' onClick={()=>setOpen(false)}>
                 
                  Chilrden Info
                </Link>
              </li>
            )}
            {showTeacherBoard && (
              <li className='nav-item'>
                <Link to="/view-posts" className='nav-link' onClick={()=>setOpen(false)}>
                  
                   Announcements
                </Link>
              </li>
            )}
            {showParentBoard && (
              <li className='nav-item'>
                <Link to="/view-posts" className='nav-link' onClick={()=>setOpen(false)}>
                  
                  Announcements
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className='nav-item'>
                <Link to="/admin/generate-timetable" className='nav-link' onClick={()=>setOpen(false)}>
                  
                  Time Table
                </Link>
              </li>
            )}  


            {currentUser ?(
            <li className='nav-item'>
          
                
                    <Button
                      id="basic-button"
                      aria-controls={opens ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      size="medium"
                      sx={{ ml: 2 }}
                      aria-expanded={opens ? 'true' : undefined}
                      onClick={handleClick}
                      
                      className='nav-link'

                    >
                      <Avatar sx={{ width: 63, height: 63 }}>{getUser.username}</Avatar>

                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={opens}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      
                    >
                      <Link to="/profile">
                      <MenuItem onClick={handleClose}>
                        < ListItemIcon>
                          <Person fontSize="small" />
                        </ListItemIcon>
                        Profile
                      </MenuItem>
                      </Link>

                      
                      <a href='/' onClick={logOut}> 
                      <MenuItem onClick={handleClose}>
                        < ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                      </a>

                    </Menu>
                 
                   
                
                 

            </li>
            ):(
              null      
           )}
          </ul>
                       
        </nav>
        
        {/* navigation on the side bar
        <nav className={sidebar ? 'navi-menu active': 'navi-menu'}>
          <ul className="nav-menu-items list-unstyled " onClick={showSidebar}>
            <li className="navibar-toggle">
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>

            
            
          </ul>
        </nav> */}
        {/* </IconContext.Provider> */}
        </div> 
    );
}

export default App;