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
        
        <div className="form-group" >
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
       
                <button className="btn btn-primary btn-block">
                
                    Sign Up
               
                </button>

                <Link to={"/admin/spersonal-details"} style={{alignItems: 'left'}}>
                    <Button variant="primary">
                    Next
                    
                </Button>
            </Link>
        </div>
      
            
            
     
        </div>
       
        {message && (
        <div className="form-group">
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

      
    </div>
  )
}

export default SSecurityDetailsForm
