
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Table } from 'react-bootstrap';
import authService from './services/auth.service';
import SchoolDetails from './SchoolDetails'
const BoardStudent = () => {
  const [studentExam, setStudentExam] = useState([]);
  const [studentPInfo, setStudentPInfo] = useState([])
  const [studentTerm2Exam, setStudentTerm2Exam] = useState([]);
  const [studentTerm3Exam, setStudentTerm3Exam] = useState([]);
  const componentRef = useRef();
  const handlePrintSchoolReport = useReactToPrint({
    content:()=>componentRef.current,
  })
  const  currentUser = authService.getCurrentUser();

  const examResults = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/student/exam/${currentUser.username}`)
    setStudentExam(res.data)
  }

  const term2ExamResults = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/term2exam/${currentUser.username}`)
    setStudentTerm2Exam(res.data)
  }
  const term3ExamResults = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/term3exam/${currentUser.username}`)
    setStudentTerm3Exam(res.data)
  }
  const studentInfo = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/studentinfo/${currentUser.username}`)
    setStudentPInfo(res.data)
  }

  // const countStudentSubjects = async()=>{
  //   const res = await axios.get(`http://localhost:4000/api/smis/studentinfo/${currentUser.username}`)
  //   setStudentSubjectsCount(res.data)
  // }
  useEffect(()=>{
    examResults();
    studentInfo();
    term3ExamResults();
    term2ExamResults();
    
  },[])

    
      

  
  return (
    <div className='container mt-5 mb-5'>
         
         

      <div style={{textAlign: "right"}}>
        <Button onClick={handlePrintSchoolReport} >Print School Report</Button>
      </div>
      

          
          <div ref={componentRef}>
          
          
          {
            studentPInfo.map((it, ky)=>{
              return(
              <div key={ky}>
               
                
            <div className='row card-content'> 
            <div className=''>
                      <SchoolDetails/>
            </div>
            <header > 
                <h6 className='text-center'>{it.firstname} {it.surname} Report Card  {it.termName}</h6> 
            </header>
            

            <div className=''>
          <Table>
            
            <thead className='report'>
                <tr>
                  <td colspan="3">Course </td>
                  <td rowspan="2"> Obtained </td>
                  <td rowspan="2"> Out Of </td>
                  <td colspan="2"> Grade </td>
                </tr>
                <tr>
                  <td>Code </td>
                  <td colspan="2"> Name </td>
                  <td> Percentage </td>
                  <td>remarks </td>
                </tr>
    
            
            </thead>
            <tbody className='reportbody'>
             { studentExam.map((item, i)=>{
        return(
              <tr  key={i}>
                <td>{item.subjectCode}</td>
                <td colspan="2">{item.subjectName}</td>
                <td>{item.student_score}</td>
                <td>{item.totalScore}</td>
                <td>{item.grade}</td>
                <td>{item.remarks}</td>
              </tr>
             
               )
              })
              }
        
            
              
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" className="footer">Total</td>
                <td> {it.marks} </td>
                <td colspan="3">{it.fullmarks} </td>
              </tr>
              <tr>
                <td colspan="1" className="footer">Status</td>
                <td colspan="2">{it.status}</td>
                <td colspan="3" className='footer'>Comment</td>
                <td colspan="4">{it.comments}</td>
              </tr>
              </tfoot>
          </Table>
          </div>

          </div>
                    
          </div>
         )
        })
      }
      </div>
      {/* <div>
      {
            studentTerm2Exam.map((it, ky)=>{
              return(
              <div key={ky}>
               
                
            <div className='row card-content'> 
            <div className=''>
                      <SchoolDetails/>
            </div>
            <header > 
                <h6 className='text-center'>{it.firstname} {it.surname} Report Card  {it.termName}</h6> 
            </header>
            

            <div className=''>
          <Table>
            
            <thead className='report'>
                <tr>
                  <td colspan="3">Course </td>
                  <td rowspan="2"> Obtained </td>
                  <td rowspan="2"> Out Of </td>
                  <td colspan="2"> Grade </td>
                </tr>
                <tr>
                  <td>Code </td>
                  <td colspan="2"> Name </td>
                  <td> Percentage </td>
                  <td>remarks </td>
                </tr>
    
            
            </thead>
            <tbody className='reportbody'>
             { studentExam.map((item, i)=>{
        return(
              <tr  key={i}>
                <td>{item.subjectCode}</td>
                <td colspan="2">{item.subjectName}</td>
                <td>{item.student_score}</td>
                <td>{item.totalScore}</td>
                <td>{item.grade}</td>
                <td>{item.remarks}</td>
              </tr>
             
               )
              })
              }
        
            
              
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" className="footer">Total</td>
                <td> {it.marks} </td>
                <td colspan="3">{it.fullmarks} </td>
              </tr>
              <tr>
                <td colspan="1" className="footer">Status</td>
                <td colspan="2">{it.status}</td>
                <td colspan="3" className='footer'>Comment</td>
                <td colspan="4">{it.comments}</td>
              </tr>
              </tfoot>
          </Table>
          </div>

          </div>
                    
          </div>
         )
        })
      }
      </div> */}
    </div>
  )
}

export default BoardStudent
