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
               

            <div className='row card-content'> 
            <div className=''>

            </div>
            <div className='card-body'>
          <Table>
            
            <thead>
              
            <tr>
              <td>
                Full Name:
              </td>
              <td>
              {it.firstname}
              </td>
              <td>
              {it.surname}
              </td>
              <td>
                Reg#:
              {currentUser.username}
              </td>
            </tr>
            <tr className='' variant="primary">
              <th>Subjects</th>
              <th>Student Score</th>
              <th>Total Score</th>
              <th>Grade(%)</th>
              <th>remarks</th>
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
                <td>{item.remarks}</td>
              </tr>
             
               )
              })
              }
               <tr> 
                 <td>total marks :</td>
                 <td></td>
                 <td></td>
                 <td>{it.marks}</td>
               

               
              </tr>
              <tr> 
                 <td>Class: </td>
                 <td>{it.className}</td>
                 <td>Term: </td>
                 <td>{it.termName}</td>
               

               
              </tr>
             
              
            </tbody>
          </Table>
          </div>

          </div>
                    
          </div>
         )
        })
      }
      
    </div>
  )
}

export default BoardStudent
