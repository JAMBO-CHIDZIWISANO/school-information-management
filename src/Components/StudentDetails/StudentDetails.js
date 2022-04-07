import { Button} from "react-bootstrap";
import React from 'react'
import { Link } from 'react-router-dom'
import {  PersonAddAlt1Sharp, ViewList } from "@mui/icons-material";
import StudentList from "./StudentList";
import AllStudentsMarks from "./AllStudentsMarks";
const StudentDetails = () => {
  return (
    <div>
       <hr />
    <div>
        

      <div style={{textAlign: "right"}}>
       

       
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

        <div>
            <StudentList/>
        </div>
        <hr/>
        <div>
            <AllStudentsMarks/>
        </div>
    </div>
    </div>
  )
}

export default StudentDetails
