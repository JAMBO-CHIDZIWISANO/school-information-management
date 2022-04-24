import { Button} from "react-bootstrap";
import React from 'react'
import { Link } from 'react-router-dom'
import {  PersonAddAlt1Sharp, ViewList } from "@mui/icons-material";
const StudentDetails = () => {
  return (
    <div className="">
      
       
    
        

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
       

        <div>
            
        </div>
       
   
    </div>
  )
}

export default StudentDetails
