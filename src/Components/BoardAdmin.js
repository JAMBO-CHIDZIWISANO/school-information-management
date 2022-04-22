
import React from 'react'
import axios from 'axios'
import NumberOfStudents from './AdminPanel/NumberOfStudents'
import NumberOfTeachers from './AdminPanel/NumberOfTeachers'

const BoardAdmin = () => {
 
  return (
    <div className='container mt-5'>
      
      <div className='row '>
        <div className='col-12 col-md-4 col-lg-3 '>
          <h3 className='card-header'>number of students</h3>
          <div className='card-body'>
             <NumberOfStudents/>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-3 '>
          <h3 className='card-header'>number of teachers</h3>
          <div className='card-body'>
            <NumberOfTeachers/>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-3 '>
          <h3 className='card-header'>number of Subjects</h3>
          <div className='card-body'>
             
             </div>
        </div>
        <div className='col-12 col-md-4 col-lg-3 '>
          <h3 className='card-header'>examinations</h3>
          <div className='card-body'>
             
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default BoardAdmin
