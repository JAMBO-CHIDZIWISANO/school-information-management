import { PersonAddAlt1Sharp } from "@mui/icons-material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import userService from "../services/user.service";

const AddTeacher = () => {

  // form teacher details registration
  const [teacherId, setTeacherId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [userId, setUserId]= useState("");
  const [schoolId, setSchoolId] = useState("")
  
  const [message, setMessage] = useState("");

  //handle input changes
  const onChangeSchoolId=(e)=>{
    const schoolId = e.target.value;
    setSchoolId(schoolId)
  };
  const onChangeTeacherId=(e)=>{
    const teacherId = e.target.value;
    setTeacherId(teacherId)
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
    setUserId(userId);
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

  return (

    <div className="container">
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
      <h3 className="text-center" >Personal Details</h3><hr/>
      <form autoComplete="false" onSubmit={handleAdd} >
      <div className="form-group">
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
            
              <div className="form-group" >
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

              <div className="form-group" >
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

              <div className="form-group">
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

              <br/>
              <div className="form-group">
                <strong htmlFor="gender">Gender</strong>
                <select 
                  value={gender} onChange={onChangeGender} required>
                  <option></option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div><br/>

              <div className="form-group">
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
              <br/>

              <div className="form-group">
                <strong htmlFor="qualification">Qualification</strong>
                <select value={qualification} onChange={onChangeQualification}
                  required>
                  <option></option>
                  <option>Diploma</option>
                  <option>Bachelors Degree</option>
                  <option>Master's Degree</option>
                </select>
              </div><br/>

              <div className="form-group">
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

              <div className="form-group">
                <strong htmlFor="schoolId">school code</strong>
                <input
                  type="number"
                  className="form-control"
                  name="schoolId"
                  value={schoolId}
                  onChange={onChangeSchoolId}
                  required
                />
              </div>

             
              <div className="form-group">
                <button className="btn btn-primary btn-block">Submit</button>
                <Link to={"/admin/add-sdteacher"}>
                <Button variant="primary">add another teacher</Button>
                </Link>
              </div>

              
           
        </form>
        </div>

    </div>
  );
};
export default AddTeacher; 
