import userService from "../services/user.service";
import AuthService from "../services/auth.service";

import {ArrowBackSharp, PersonAddAlt1Sharp, ViewList } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Button} from "react-bootstrap";

import React, {useState} from 'react'

const SSecurityDetailsForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const [studentId, setStudentId] = useState(username)
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [DoB, setDoB] = useState("");
    const [gender, setGender] = useState("");
    const [userId, setUserId]= useState(username)
    const [classId, setClassId] = useState("");
    const [parentId, setParentId] = useState("");
    const [schoolId, setSchoolId] = useState("");

    const onChangeStudentId=(e)=>{
        const studentId = e.target.value;
        setStudentId(username)
    }
    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };

    const onChangeSurname = (e) => {
        const surname = e.target.value;
        setSurname(surname);
    };

    const onChangeDoB = (e) => {
        const DoB = e.target.value;
        setDoB(DoB);
    };
    const onChangeGender = (e) => {
        const gender = e.target.value;
        setGender(gender);
    };
    
    const onChangeUserId = (e) => {
        const userId = e.target.value;
        setUserId(username);
    };

    const onChangeParentId = (e)=>{
        const parentId = e.target.value;
        setParentId(parentId)
    };

    const onChangeClassId= (e)=>{
        const classId = e.target.value;
        setClassId(classId);
    };

    const onChangeSchoolId = (e)=>{
        const schoolId = e.target.value;
        setSchoolId(schoolId);
    }

    const addStudent = (e) => {
        e.preventDefault();
        setMessage("");
        userService.studentPersonalDetails(studentId, firstname, surname, DoB, gender, userId,  parentId, classId, schoolId ).then(
            (response) => {
              setMessage(response.data.message);
            },
            (error) => {
                const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
                setMessage(resMessage);
              
            }
          );
    
      };
    
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        //form.current.validateAll();
          AuthService.registerStudent( username, email, password).then(
            (response) => {
              setMessage(response.data.message);
              setSuccessful(true);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setMessage(resMessage);
              
            }
          );
    
      };

  return (
    <div className="container">
        <hr />
        <div style={{textAlign: "left"}}>
            <Link to="/admin/students-details">
                <Button variant="primary">
                    <ArrowBackSharp/>
                </Button>
            </Link>
        </div>

        <div style={{textAlign: "right"}}>
            <Link to={"/admin/students"}> 
                <Button variant="primary">
                    <ViewList/>Students
                </Button>       
            </Link>
            <Link to={"/admin/exam-records"}> 
                <Button variant="primary">
                    <ViewList/>Examinations
                </Button>        
            </Link>
    
            <Link to="/admin/add-student">
                <Button variant="primary">
                    <PersonAddAlt1Sharp/>
                </Button>
            </Link>
        </div>
        <hr/>

        <div className="col-md-6">
        <h3 className="text-center" >Student Security Details Form</h3><hr/>

        <form onSubmit={handleRegister}>
       
        <div>
        
        <div className="form-group mt-3" >
            <strong htmlFor="username">Username</strong>
            <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            required
            />
        </div>
        <div className="form-group mt-3">
            <strong htmlFor="email">Email</strong>
            <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
            />
        </div>
        <div className="form-group mt-3">
            <strong htmlFor="password">Password</strong>
            <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
            />
        </div>
        <div className="form-group mt-3">
       
                <button className="btn btn-primary btn-block">
                
                    Sign Up
               
                </button>

               
           
        </div>
      
            
            
     
        </div>
       
        {message && (
        <div className="form-group mt-3">
        <div
            className={ successful ? "alert alert-success" : "alert alert-danger" }
            role="alert"
        >
            {message}
        </div>
        </div>
        )}
        </form>
        </div>

        <div className="col-md-6">
        <h3 className="text-center" >student personal  Information</h3><hr/>

        <form autoComplete="off" onSubmit={addStudent}>

            <div className="form-group mt-3">
                <strong htmlFor="userId">userId</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="userId"
                    value={userId} 
                    onChange={onChangeUserId} 
                    required
                />
            </div>

            <div className="form-group mt-3" >
                <strong htmlFor="studentId">student Id</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="firstname"
                    value={studentId} 
                    onChange={onChangeStudentId} 
                    required
                />
            </div>

            <div className="form-group mt-3" >
                <strong htmlFor="firstname">Firstname</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="firstname"
                    value={firstname} 
                    onChange={onChangeFirstname} 
                    required
                />
            </div>

            <div className="form-group mt-3">
                <strong htmlFor="surname">Surname</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="surname"
                    value={surname} 
                    onChange={onChangeSurname} required
                />
            </div>

            <div className="form-group mt-3">
                <strong htmlFor="DoB">Date of Birth</strong>
                <input 
                type="date" 
                className="form-control" 
                name="DoB"
                value={DoB} 
                onChange={onChangeDoB} required
                />
            </div>

            <div className="form-group mt-3">
                <strong htmlFor="gender">Gender</strong>
                <select 
                    value={gender} 
                    name="gender"
                    type="text"
                    className='form-control'
                    onChange={onChangeGender} 
                    required>
                    <option>Tap to Choose</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>
            </div>

            <div className="form-group mt-3">
                <strong htmlFor="parentId">parent username</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="parentId"
                    value={parentId}
                    onChange={onChangeParentId} 
                    required
                />
            </div>

            <div className="form-group mt-3">
                <strong htmlFor="classId">class</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="classId"
                    value={classId} 
                    onChange={onChangeClassId} 
                    required
                />
            </div>

                <div className="form-group mt-3">
                    <strong htmlFor="schoolId">school code</strong>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="schoolId"
                        value={schoolId} 
                        onChange={onChangeSchoolId} 
                        required
                    />
                </div>

                <div className="form-group mt-3">
                    
                    <button className="btn btn-primary btn-block">Register</button>
                    
                </div>

            {message && (
                <div className="form-group">
                <div
                    className= "alert alert-success alert alert-danger" 
                    role="alert"
                >
                    {message}
                </div>
                </div>
            )}

        </form>
        </div>


      
    </div>
  )
}

export default SSecurityDetailsForm
