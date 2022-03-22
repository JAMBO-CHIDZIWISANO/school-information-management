import React, { useState, useRef } from "react";
import userService from "../services/user.service";
import AuthService from "../services/auth.service";

const AddStudent = () => {

  const [id, setId] = useState("")
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form2- student details registration
  const [studentId, setStudentId] = useState("")
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId]= useState("")
  // setting out error messages
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // handling events
  const onChangeId = (e)=>{
    const id = e.target.value;
    setId(id)
  }
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


  const onChangeStudentId=(e)=>{
    const studentId = e.target.value;
    setStudentId(studentId)
  }
  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeMiddlename = (e) => {
    const middlename = e.target.value;
    setMiddlename(middlename);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };
  const onChangeGender = (e) => {
    const gender = e.target.value;
    setGender(gender);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeUserId = (e) => {
    const userId = e.target.value;
    setUserId(userId);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      AuthService.registerStudent(id, username, email, password).then(
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
          setSuccessful(false);
        }
      );

  };

  const addStudent = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      userService.studentPersonalDetails(studentId, firstname, middlename, lastname, gender,address, userId ).then(
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
          setSuccessful(false);
        }
      );

  };

  return (
      <div className="container">
            <div className="col-md-6">
            <h3 className="text-center" >Student Sign Up Form</h3><hr/>

        <form onSubmit={handleRegister}>
          {!successful && (
            <div>
              <div className="form-group" >
                <strong htmlFor="id">student id</strong>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={id}
                  onChange={onChangeId}
                  required
                />
              </div>
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
              </div>
            </div>
          )}
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
      <br/><br/>
      <div className="col-md-6">
      <h3 className="text-center" >Additional Information</h3><hr/>

      <form autoComplete="off" onSubmit={addStudent}>


              <div className="form-group" >
              <strong htmlFor="studentId">student Id</strong>
              <input type="text" className="form-control" name="firstname"
                value={studentId} onChange={onChangeStudentId} required
              />
              </div>

              <div className="form-group" >
                <strong htmlFor="firstname">Firstname</strong>
                <input type="text" className="form-control" name="firstname"
                    value={firstname} onChange={onChangeFirstname} required
                />
              </div>

              <div className="form-group">
                <strong htmlFor="middlename">Middle Name</strong>
                <input type="text" className="form-control" name="middlename"
                    value={middlename} onChange={onChangeMiddlename} required
                />
              </div>

              <div className="form-group">
                <strong htmlFor="lastname">Lastname</strong>
                <input type="text" className="form-control" name="lastname"
                    value={lastname} onChange={onChangeLastname} required
                />
              </div>

              <div className="form-group">
                <strong htmlFor="gender">Gender</strong>
                <input type="text" className="form-control" name="gender"
                    value={gender} onChange={onChangeGender} required
                />
              </div>

              <div className="form-group">
                <strong htmlFor="address">Address</strong>
                <input type="text" className="form-control" name="address"
                    value={address} onChange={onChangeAddress} required
                />
              </div>

              <div className="form-group">
                <strong htmlFor="userId">userId</strong>
                <input type="number" className="form-control" name="userId"
                    value={userId} onChange={onChangeUserId} required
                />
              </div>

              <div className="form-group">
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
  );
};
export default AddStudent