import React, { useState } from "react";
import userService from "../services/user.service";
import AuthService from "../services/auth.service";


const AddParent = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form2- teacher details registration
  const [parentId, setParentId] = useState("")
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId]= useState("")

  // setting out error messages
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // handling events
  
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


  const onChangeParentId=(e)=>{
    const parentId = e.target.value;
    setParentId(parentId)
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
    setPhoneNo(phoneNo);
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
      AuthService.registerParent( username, email, password).then(
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

  const addParent = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      userService.parentPersonalDetails(parentId, firstname, surname, phoneNo, gender,address, userId).then(
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
        <div  className="col-md-6">
        {/* <div className="col-xs-6 col-sm-6 col-md-6"> */}
        <br></br> <br></br>
        <h3 className="text-center" >Parent Sign Up Form</h3><hr/>
        <form onSubmit={handleRegister}>
          {!successful && (
            <div>


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
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
      <br></br> <br></br>

      <div className="col-md-6" >
      <form autoComplete="off" onSubmit={addParent}>

      <div className="form-group" >
            <strong htmlFor="parentId">parent Id</strong>
            <input type="text" className="form-control" name="parentId"
                value={parentId} onChange={onChangeParentId} required
            />
          </div>

            <div className="form-group" >
            <strong htmlFor="firstname">Firstname</strong>
            <input type="text" className="form-control" name="firstname"
                value={firstname} onChange={onChangeFirstname} required
            />
          </div>

          <div className="form-group">
            <strong htmlFor="surname">Middle Name</strong>
            <input type="text" className="form-control" name="surname"
                value={surname} onChange={onChangeSurname} required
            />
          </div>

          <div className="form-group">
            <strong htmlFor="phoneNo">Lastname</strong>
            <input type="tel" className="form-control" name="phoneNo"
                value={phoneNo} onChange={onChangePhoneNo} required
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
            <input type="text" className="form-control" name="userId"
                value={userId} onChange={onChangeUserId} required
            />
          </div>

            <div className="form-group">
                <button className="btn btn-primary btn-block">Submit</button>
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
export default AddParent;