 
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
//importing files
import "./AppSideBar"
import AuthService from "./Components/services/auth.service"
import { Avatar } from '@mui/material';


//app function
function App() {

  //menu for profile and logout drop down
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //handle menu click event
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //handle close menu event
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const getUser = AuthService.getCurrentUser();
    return (

      <div className="App">
        
        <IconContext.Provider value={{color: '#fff'}}>
        <header className='wrapp'>
        <div className="navbar" >
         
            {/* closing the sidebar button */}
            <Link to="#" className="px-4">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>

            <div>
              <h2 className="text-white">SMIS</h2>
            </div>

            <div className=" ms-auto order-5">

              {/* show the all logged users */}
              {currentUser ?(
                <div className="list-unstyled ">
                  <div >
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      size="medium"
                      sx={{ ml: 2 }}
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      className='text-white'
                      

                    >
                      <Avatar sx={{ width: 63, height: 63 }}>{getUser.username}</Avatar>

                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
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

                      {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                      
                      <a href='/' onClick={logOut}> 
                      <MenuItem onClick={handleClose}>
                        < ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                      </a>

                    </Menu>
                  </div>
   
                </div>
                  ):(
                 null      
              )}
          </div>
        </div>
        </header>
        {/* navigation on the side bar */}
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
            {showAdminBoard&&(
            <li>
              <Link to="/admin/announcements" className="nav-text">
                <Notifications/>
                Publish News
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
                  Student Board 
                </Link>
              </li>
            )}
            
            {showParentBoard && (
              <li>
                <Link to="/parent" className="nav-text">
                  <AiIcons.AiFillHome/>
                  Parent Board
                </Link>
              </li>
            )}
            {showTeacherBoard && (
              <li>
                <Link to="/view-posts" className="nav-text">
                  <Campaign/>
                   Announcements
                </Link>
              </li>
            )}
            {showParentBoard && (
              <li>
                <Link to="/view-posts" className="nav-text">
                  <AiIcons.AiFillHome/>
                  Announcements
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li>
                <Link to="/admin/generate-timetable" className="nav-text">
                  <Schedule/>
                  <h1> </h1>Time Table
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