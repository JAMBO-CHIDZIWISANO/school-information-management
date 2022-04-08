import { PersonAddAlt1Sharp } from '@mui/icons-material';
import React, { useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
import userService from "../services/user.service";

const AddTSecurityDetails = () => {

    //initializing variables state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form teacher details registration
  const [teacherId, setTeacherId] = useState(username);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [userId, setUserId]= useState(username);
  const [schoolId, setSchoolId] = useState("")

  // setting out error messages

  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  //handle input changes
  const onChangeSchoolId=(e)=>{
    const schoolId = e.target.value;
    setSchoolId(schoolId)
  };
  const onChangeTeacherId=(e)=>{
    const teacherId = e.target.value;
    setTeacherId(username)
  };
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
    setUserId(username);
  };

  const handleAdd = (e)=>{
    e.preventDefault();

    userService.teacherPersonalDetails(
                  userId,
                  teacherId, 
                  firstname, 
                  surname, 
                  gender,
                  phoneNo, 
                  qualification, 
                  joinDate, 
                  schoolId).then(
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
  }

 

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
              <button className="btn btn-primary btn-block">Sign Up</button>

            
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

      <div className="col-md-6">
      <h3 className="text-center" >Personal Details</h3><hr/>
      <form autoComplete="false" onSubmit={handleAdd} >
      <div className="form-group mt-3">
              <strong htmlFor="userId">Username </strong>
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
                <strong htmlFor="teacherId">repeat username</strong>
                <input
                  type="text"
                  className="form-control"
                  name="teacherId"
                  value={teacherId}
                  onChange={onChangeTeacherId}
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
                <strong htmlFor="surname">surname</strong>
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
                <strong htmlFor="phoneNo">Phone No</strong>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={onChangePhoneNo}
                  required
                />
              </div>
              

              <div className="form-group mt-3">
                <strong htmlFor="qualification">Qualification</strong>
                <select 
                  value={qualification} 
                  onChange={onChangeQualification}
                  name="gender"
                  type="text"
                  className='form-control'
                  required>
                  <option>Tap to Choose</option>
                  <option>Diploma</option>
                  <option>Bachelors Degree</option>
                  <option>Master's Degree</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <strong htmlFor="joinDate">Join Date</strong>
                <input
                  type="date"
                  className="form-control"
                  name="joinDate"
                  value={joinDate}
                  onChange={onChangeJoinDate}
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
                <button className="btn btn-primary btn-block">Submit</button>
                
              </div>

              
           
        </form>
        </div>

      
    </div>
  )
}

export default AddTSecurityDetails
