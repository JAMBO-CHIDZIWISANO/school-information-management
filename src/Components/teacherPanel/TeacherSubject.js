import React, { useState,useEffect } from 'react'
import authService from '../services/auth.service';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const TeacherSubject = () => {

  const currentUser = authService.getCurrentUser();
  const [subjects, setSubjects] = useState([]);
  const {subjectCode} = useParams();
  const navigate = useNavigate()

  const subjectSubjects = async ()=>{
    const response = await axios.get(`http://localhost:4000/api/smis/teacher-subjects/${currentUser.username}`)
    setSubjects(response.data)
}  

useEffect(()=>{
    subjectSubjects();
},[])

  return (
    <div className=''>
      {subjects.map((item, key) =>{
        return(
          <div key={key}  className="border mt-2" style={{width:470}}>

                    
                    {/* <img  alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/> */}
                    <div className="media-body" >
                        <p>{item.subjectCode} {item.subjectName}  {item.studentId} <small><i >
                          <button className='btn btn-primary btn-primary' onClick={() => {navigate(`/enterMarks/${item.subjectCode}`)}} >Click to Add Marks</button>
                          </i></small></p>
                    </div>
                  </div>


      )
    })}
    </div>
  )
}

export default TeacherSubject
