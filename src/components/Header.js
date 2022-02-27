import { MenuOutlined } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NaviMobile from './NaviMobile'

import AuthService from '../services/auth.service'


const Header = () => {

  //declaring visibility of the authenticated routes
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showStudentBoard, setShowStudentBoard] = useState(false);
  const [showParentBoard, setShowParentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  //setting up the roles of the users upon logged in to be showed unto the profile
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowStudentBoard(user.roles.includes("ROLE_STUDENT"));
      setShowParentBoard(user.roles.includes("ROLE_PARENT"));
    }
  }, []);

  //function for logout the user
  const logOut = () => {
    AuthService.logout();
  };


    //state for mobile interface
    const [active, setActive] = useState(false)
    const showMenu = () =>{
        setActive(!active)
    }
  return (
    <div className=
    'w-full absolute lg:flex items-center p-4 flex justify-between'>
        
        <span className=
        'text-4xl font-extrabold uppercase text-white select-none'>
           SCHOOL MANAGEMENT
        </span>

      <nav>
            <ul className=
            'hidden lg:flex gap-8 uppercase p-6 text-white font-medium'>

                    {/** public link */}
                    <li><Link to='/'>Home</Link></li>

                    {/** protected link */}
                    {showAdminBoard &&(<li><Link to='/admin'>Admin</Link></li>)}
                    {showTeacherBoard &&(<li><Link to='/teacher'>Teacher</Link></li>)}
                    {showStudentBoard &&(<li><Link to='/student'>Student</Link></li>)}
                    {showParentBoard &&(<li><Link to='/parent'>Parent</Link></li>)}

                    {/** accessed by all system users link */}
                    {currentUser &&(<li><Link to='/user'>User</Link></li>)}
                    {currentUser ?(
                      <>
                        <li><Link to="/profile">profile</Link></li>
                        <li><a href='/login' onClick={logOut}> LogOut</a></li>
                        </>
                    ):(<>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                        </>
                    )}
            </ul>

            {/* import mobile interface on pressing outline button*/}
            <NaviMobile showMenu={showMenu} active={active}/>
      </nav>

      <div className=
      'lg:hidden scale-150'>
            {/**hamburger (3 lines) that show nav on mobile interface onclick */}
            <MenuOutlined onClick={showMenu} className=
            "cursor-pointer text-black "/>
      </div>

    </div>
  )
}

export default Header
