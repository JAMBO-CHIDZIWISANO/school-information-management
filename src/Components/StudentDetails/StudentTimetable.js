
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Table } from 'react-bootstrap';
import authService from '../services/auth.service';
const StudentTimetable = () => {
    const [studentTimetable, setStudentTimetable] = useState([]);
    const  currentUser = authService.getCurrentUser();

    const componentRef = useRef()
    const handlePrintTimetable = useReactToPrint({
        content: ()=>componentRef.current,
    });

  const timeTable = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/timetable/${currentUser.username}`)
    setStudentTimetable(res.data)
  }
 
  useEffect(()=>{
    timeTable();
   
   
    
  },[])

  return (
    <div className='container mt-5'>
         
            <div className=''>

                <button onClick={handlePrintTimetable}>print</button>

            <div ref={componentRef}>
            <Table>
            
            <thead>
              
            
            <tr className='' variant="primary">
              <th>Subjects</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End</th>
              <th>Room</th>
            </tr>
           
            </thead>
            <tbody>
            { studentTimetable.map((item, i)=>{
        return(
              <tr  key={i}>
                <td>{item.subject}</td>
                <td>{item.day}</td>
                <td>{item.lesson_startTime}</td>
                <td>{item.lesson_endTime}</td>
                <td>{item.roomName}</td>
              </tr>
             
               )
              })
              }
               
               

               
             
             
             
              
            </tbody>
          </Table>
          </div>
          </div>

         
     
      
    </div>
  )
}

export default StudentTimetable
