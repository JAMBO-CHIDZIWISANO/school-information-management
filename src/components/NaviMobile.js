import { Close } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import { Link  } from 'react-router-dom';
import AuthService from '../services/auth.service';
const NaviMobile = ({active, showMenu}) => {

  //states that control visibility of user panels
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showStudentBoard, setShowStudentBoard] = useState(false);
  const [showParentBoard, setShowParentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  //set focus on the first input when component load
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
  return (
        <ul  className={active? 
        'flex-col fixed inset-0 left-1/3 flex items-center justify-center gap-12 uppercase bg-stone-50/10 backdrop-blur-md z-10000 lg:hidden': 
        'hidden'}>

                <Close onClick={showMenu}/>
                <li><Link to='/'>Home</Link></li>
                {showAdminBoard &&(<li><Link to='/admin'></Link>Admin</li>)}
                {showTeacherBoard &&(<li><Link to='/teacher'>Teacher</Link></li>)}
                {showStudentBoard &&(<li><Link to='/student'>Student</Link></li>)}
                {showParentBoard &&(<li><Link to='/parent'>Parent</Link></li>)}
                {currentUser &&(<li><Link to='/user'>User</Link></li>)}
                
                {currentUser ?(
                      <div>
                        <li><Link to="/profile">profile</Link></li>
                        <li><a href='/login' onClick={logOut}> LogOut</a></li>
                      </div>
                ):(
                      
                        <>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                        </>
                      
                    )}


        </ul>
  );
}

export default NaviMobile
