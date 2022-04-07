import { PersonAddAlt1Sharp } from '@mui/icons-material';
import React, { useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

const AddTSecurityDetails = () => {

    //initializing variables state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // setting out error messages
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    //handle on text input changes
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

    //handle teacher creation
    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        AuthService.registerTeacher(username, email, password).then(
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
    


  return (
    <div className='container'>
        <hr />
      <div style={{textAlign: "right"}}>

      <Link to={"/admin/teacher-record"}> 
        <Button  variant="primary">
          back
        </Button>
      </Link>

        
    
        <Link to={"/admin/add-sdteacher"}> 
            <Button variant="primary">
                <PersonAddAlt1Sharp/>
            </Button>
        </Link>
      </div>
      <hr/>

        <div className="col-md-6">
        <h3 className="text-center" >Teacher Sign Up Form</h3><hr/>
        <form onSubmit={handleRegister}>
          {!successful && (
          <div className="" >
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
              <button className="btn btn-primary btn-block">Sign Up</button>

              <Link to={"/admin/add-tpersondetails"}>
                <Button variant="primary">next</Button>
                </Link>
            </div>

            <div>
                
              </div>

          </div>
          )}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
      
    </div>
  )
}

export default AddTSecurityDetails
