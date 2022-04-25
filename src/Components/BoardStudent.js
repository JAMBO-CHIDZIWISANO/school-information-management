
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Table } from 'react-bootstrap';
import authService from './services/auth.service';
import StudentTimetable from './StudentDetails/StudentTimetable';
const BoardStudent = () => {
  const [studentExam, setStudentExam] = useState([]);
  const [studentPInfo, setStudentPInfo] = useState([])
  const componentRef = useRef();
  const handlePrintSchoolReport = useReactToPrint({
    content:()=>componentRef.current,
  })
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
    <div className='container mt-5 mb-5'>

      <div style={{textAlign: "right"}}>
        <Button onClick={handlePrintSchoolReport} >print school report</Button>
      </div>
      <hr/>

          
          <div ref={componentRef}>
          
          
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
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                Full Name:
              </td>
              <td>
              {it.firstname}
              </td>
              
            </tr>
            <tr>
              <td>Surname: </td>
              <td>
              {it.surname}
              </td>
            </tr>
              
            <tr>
              <td>Reg#:</td>
              <td>
                
              {currentUser.username}
              </td>
            </tr>
            <tr className='' >
              <td>Subjects</td>
              <td>Student Score</td>
              <td>Total Score</td>
              <td>Grade(%)</td>
              <td>remarks</td>
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
                 <td></td>
                 <td></td>
                 <td>Full Marks :</td>
                 <td>{it.fullmarks}</td>
               

               
              </tr>
              <tr> 
                 <td></td>
                 <td></td>
                 <td>Marks Obtained :</td>
                 <td>{it.marks}</td>
               
              </tr>
              <tr> 
                 
                 <td>Status :</td>
                 
                 <td >{it.status}</td>
                 <td>Comment</td>
                 <td>{it.comments}</td>
               
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
      <div>
        <StudentTimetable/>
      </div>
    </div>
  )
}

export default BoardStudent
