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
    <div>
      {subjects.map((item, key) =>{
        return(
          <div key={key} onClick={() => {navigate(`/enterMarks/${item.subjectCode}`)}}>
      <div>{item.subjectCode} </div>
      <div> {item.subjectName}</div>
      </div>
      )
    })}
    </div>
  )
}

export default TeacherSubject
