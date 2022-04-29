
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NumberOfStudents from './AdminPanel/NumberOfStudents'
import NumberOfTeachers from './AdminPanel/NumberOfTeachers'
import { Link } from 'react-router-dom'

const BoardAdmin = () => {

  //decraling subjects count variables
  const [countSubjects, setCountSubjects] = useState([])

  const subjectCount = async () =>{
    const response = await axios.get('http://localhost:4000/api/smis/countAllSubjects');
    setCountSubjects(response.data)
  }

  useEffect(()=>{
    subjectCount();
  },[]);

 
  return (
    <div className='container mt-5'>
      
      <div className='row '>
        <div className='col-12 col-md-4 col-lg-3 card card-margin mx-2 '>
        <div className="card-header no-border">
                <h5 class="card-title">Number Of Students</h5>
            </div>
          <div className='card-body'>
             <NumberOfStudents/>
          </div>
          
        </div>

        <div className='col-12 col-md-4 col-lg-3 card card-margin mx-2'>
        <div class="card-header no-border">
                <h5 className="card-title">Number Of Teachers</h5>
            </div>
          <div className='card-body'>
            <NumberOfTeachers/>
          </div>
         
        </div>
        <div className='col-12 col-md-4 col-lg-3  card card-margin mx-2'>
        <div className="card-header no-border">
                <h5 className="card-title">Number of Subjects</h5>
            </div>
          <div className='card-body'>
            {countSubjects.map((item,i)=>{
              return(
                <h3 key={i} className="text-center justify-text-center align-text-center">
                  {item.subjects}
                </h3>
              )
            }
            
            )}
             
             </div>
            
        </div>
       
      </div>
      
    </div>
  )
}

export default BoardAdmin
