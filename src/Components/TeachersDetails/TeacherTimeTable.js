
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import authService from '../services/auth.service';
const TeacherTimeTable = () => {
  const [teacherTimetable, setTeacherTimetable] = useState([]);
  
  const  currentUser = authService.getCurrentUser();

  const timeTable = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/teacher-timetable/${currentUser.username}`)
    setTeacherTimetable(res.data)
  }
 
  useEffect(()=>{
    timeTable();
  },[])

  return (
    <div className='container mt-5'>
         <h3 className="text-center">Time Table</h3>
            <div className='card-body'>
          <Table>
            
            <thead>
              
            
            <tr className='' variant="primary">
              <th>Subjects</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End</th>
              <th>Room</th>
              <th>Class</th>
            </tr>
           
            </thead>
            <tbody>
            { teacherTimetable.map((item, i)=>{
        return(
              <tr  key={i}>
                <td>{item.subjectName}</td>
                <td>{item.day}</td>
                <td>{item.lesson_startTime}</td>
                <td>{item.lesson_endTime}</td>
                <td>{item.roomName}</td>
                <td>{item.className}</td>
              </tr>
             
               )
              })
              } 
            </tbody>
          </Table>
          </div>

    </div>
  )
}

export default TeacherTimeTable
