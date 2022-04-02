
import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userService from "../services/user.service";

const SPersonalDetailsForm = () => {

    const [studentId, setStudentId] = useState("")
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [DoB, setDoB] = useState("");
    const [gender, setGender] = useState("");
    const [userId, setUserId]= useState("")
    const [classId, setClassId] = useState("");
    const [parentId, setParentId] = useState("");
    const [schoolId, setSchoolId] = useState("");

    const [message, setMessage] = useState("");

    const onChangeStudentId=(e)=>{
        const studentId = e.target.value;
        setStudentId(studentId)
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
        setUserId(userId);
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
    

  return (
    <div className='container'>
        
        <div className="col-md-6">
        <h3 className="text-center" >student personal  Information</h3><hr/>

        <form autoComplete="off" onSubmit={addStudent}>

            <div className="form-group">
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

            <div className="form-group" >
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
                <strong htmlFor="surname">Surname</strong>
                <input 
                    type="text" 
                    className="form-control" 
                    name="surname"
                    value={surname} 
                    onChange={onChangeSurname} required
                />
            </div>

            <div className="form-group">
                <strong htmlFor="DoB">Date of Birth</strong>
                <input 
                type="date" 
                className="form-control" 
                name="DoB"
                value={DoB} 
                onChange={onChangeDoB} required
                />
            </div>

            <div className="form-group">
                <strong htmlFor="gender">Gender</strong>
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

            <div className="form-group">
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

                <div className="form-group">
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

                <div className="form-group">
                    
                    <button className="btn btn-primary btn-block">Register</button>
                    <Link to={"/admin/add-student"}>
                        <Button variant="primary">
                        Add Another Student
                        </Button>
                    </Link>
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

export default SPersonalDetailsForm
