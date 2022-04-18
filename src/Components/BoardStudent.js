import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import authService from './services/auth.service';
const BoardStudent = () => {
  const [studentExam, setStudentExam] = useState([]);
  const [studentPInfo, setStudentPInfo] = useState([])
  const  currentUser = authService.getCurrentUser();

  const examResults = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/student/exam/${currentUser.username}`)
    setStudentExam(res.data)
  }
  const studentInfo = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/studentinfo/${currentUser.username}`)
    setStudentPInfo(res.data)
  }
  useEffect(()=>{
    examResults();
    studentInfo();
    
  },[])
  return (
    <div className='container mt-5'>
          {
            studentPInfo.map((it, ky)=>{
              return(
              <div key={ky}>
                
             <div className='row text-center mb-4'>
               <div className='col-8 col-md-2 col-lg-2'>
                  {it.firstname}
               </div>
               <div className='col-8 col-md-2 col-lg-2'>
               {it.surname}
               </div>
               <div className='col-8 col-md-2 col-lg-2'>
               {it.className}
               </div>
               <div className='col-8 col-md-2 col-lg-2'>
               {it.termName}
               </div>
            </div>

            <div className='row'>   
               
          <Table>
            
            <thead>
             
             
            <tr>
              <th>Subjects</th>
              <th>Student Score</th>
              <th>Total Score</th>
              <th>Grade(%)</th>
            </tr>
           
            </thead>
            <tbody>
            { studentExam.map((item, i)=>{
        return(
              <tr  key={i}>
                <td>{item.subjectName}</td>
                <td>{item.student_score}</td>
                <td>{item.total_score}</td>
                <td>{item.grade}</td>
              </tr>
             
               )
              })
              }
               <tr>
               
               
              </tr>
              {currentUser.email}
              
            </tbody>
          </Table>
          </div>
          </div>
         )
        })
      }
      
    </div>
  )
}

export default BoardStudent
