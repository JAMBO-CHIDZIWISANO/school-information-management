import axios from "axios";
import React, { useState } from "react";
import userService from "../services/user.service";
import AuthService from "../services/auth.service";

const AddTeacher = () => {

  //const [id, setId] =useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form2- teacher details registration
  const [teacherId, setTeacherId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [userId, setUserId]= useState("");
  // setting out error messages
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  // handling events

  // const onChangeId =(e)=>{
  //   const id = e.target.value;
  //   setId(id);
  // }
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


  const onChangeTeacherId=(e)=>{
    const teacherId = e.target.value;
    setTeacherId(teacherId)
  }
  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeSurname = (e) => {
    const surname = e.target.value;
    setSurname(surname);
  };

  const onChangePhoneNo = (e) => {
    const phoneNo = e.target.value;
    setPhone(phoneNo);
  };
  const onChangeGender = (e) => {
    const gender = e.target.value;
    setGender(gender);
  };
  const onChangeQualification = (e) => {
    const qualification = e.target.value;
    setQualification(qualification);
  };
  const onChangeJoinDate = (e) => {
    const joinDate = e.target.value;
    setJoinDate(joinDate);
  };
  const onChangeUserId = (e) => {
    const userId = e.target.value;
    setUserId(userId);
  };



  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
      AuthService.registerTeacher(username, email, password).then(
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

  const handleAdd = (e)=>{
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
      userService.teacherPersonalDetails(teacherId, 
                  firstname, 
                  surname, 
                  phoneNo, 
                  gender,
                  qualification, 
                  joinDate, 
                  userId).then(
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
  }

  return (

    <div className="container">
      <div className="col-md-6">
        <h3 className="text-center" >Teacher Sign Up Form</h3><hr/>

        <form onSubmit={handleRegister}>
          {!successful && (

          <div className="" >
            

            <div className="form-group" >
              <label htmlFor="username">Username</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
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
                role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
      <br></br> <br></br>

      <div className="col-md-6">
      <h3 className="text-center" >Personal Details</h3><hr/>
      <form autoComplete="false" onSubmit={handleAdd} >
      <div className="form-group">
              <label htmlFor="userId">Username </label>
              <input
                type="text"
                className="form-control"
                name="userId"
                value={userId}
                onChange={onChangeUserId}
                required
              />
            </div>
            
              <div className="form-group" >
                <label htmlFor="teacherId">repeat username</label>
                <input
                  type="text"
                  className="form-control"
                  name="teacherId"
                  value={teacherId}
                  onChange={onChangeTeacherId}
                  required
                />
              </div>

              <div className="form-group" >
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={firstname}
                  onChange={onChangeFirstname}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="surname">surname</label>
                <input
                  type="text"
                  id="surname"
                  className="form-control"
                  name="middlename"
                  value={surname}
                  onChange={onChangeSurname}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNo">Phone No</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={onChangePhoneNo}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={onChangeGender}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="qualification"
                  className="form-control"
                  name="qualification"
                  value={qualification}
                  onChange={onChangeQualification}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="joinDate">Join Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="joinDate"
                  value={joinDate}
                  onChange={onChangeJoinDate}
                  required
                />
              </div>

             
              <div className="form-group">
                <button className="btn btn-primary btn-block">Submit</button>
              </div>
           
        </form>
        </div>
    </div>
  );
};
export default AddTeacher; 