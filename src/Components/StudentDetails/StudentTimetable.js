
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Table } from 'react-bootstrap';
import authService from '../services/auth.service';
const StudentTimetable = () => {
    const [studentTimetable, setStudentTimetable] = useState([]);
    const  currentUser = authService.getCurrentUser();
    const [studntSubjects, setStudntSubjects]   = useState([])
    const componentRef = useRef()
    const handlePrintTimetable = useReactToPrint({
        content: ()=>componentRef.current,
    });

  const timeTable = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/timetable/${currentUser.username}`)
    setStudentTimetable(res.data)
  }

  const subjects = async()=>{
    const res = await axios.get(`http://localhost:4000/api/smis/student/subjects/${currentUser.username}`)
    setStudntSubjects(res.data)
  }
  
 
  useEffect(()=>{
    timeTable();
   
    subjects()
    
  },[])

  return (
    <div className='container mt-5'>

      <div className='row'>
        <div className='col-12 col-md-8 col-lg-8'>
        <div className=''>

<button onClick={handlePrintTimetable} className="btn btn-primary"> print timeTable</button>

<div ref={componentRef}>
<h3 className='text-center'> {currentUser.username}'S Timetable</h3>
<Table className='mt-'>

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
        <div className='col-12 col-md-4 col-lg-4'>
        <div>
     <h3 className='text-center'> {currentUser.username}'S Subjects</h3>
       <table className='table mt-2'>
         <thead>
           <tr>
             <th>No.</th>
             <th>Code  </th>
             <th>Name  </th>
           </tr>
         </thead>
         <tbody>
           {studntSubjects.map((item,i)=>{
             return(
              <tr key={item.subjectCode}>
                <td scope='row'>{i+1}</td>
                <td>{item.subjectCode}</td>
                <td>{item.subjectName}</td>
              </tr>
             )
           })}
           
         </tbody>
       </table>
     </div>
        </div>
      </div>
         
            
         
     
      
    </div>
  )
}

export default StudentTimetable
