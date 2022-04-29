
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Table } from 'react-bootstrap';
import { useParams  } from "react-router-dom";

const ChildReportCard = () => {

    const {studentId} = useParams();
    
    const [studentExam, setStudentExam] = useState([]);
    const [studentPInfo, setStudentPInfo] = useState([])
    const componentRef = useRef();
    const handlePrintSchoolReport = useReactToPrint({
        content:()=>componentRef.current,
    })
    

    const examResults = async()=>{
        const res = await axios.get(`http://localhost:4000/api/smis/student/exam/${studentId}`)
        setStudentExam(res.data)
    }
    const studentInfo = async()=>{
        const res = await axios.get(`http://localhost:4000/api/smis/studentinfo/${studentId}`)
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
      

          
          <div ref={componentRef}>
          
          
          {
            studentPInfo.map((it, ky)=>{
              return(
              <div key={ky}>
               
                
            <div className='row card-content'> 
            <div className=''>

            </div>
            <header > 
                <h6 className='text-center'>{it.firstname} {it.surname} Report Card</h6> 
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
                <td>{item.total_score}</td>
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
      
    </div>
  )
}

export default ChildReportCard
