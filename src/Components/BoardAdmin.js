
import React from 'react'
import Timetableform from './timetable/Timetableform'
const BoardAdmin = () => {
  return (
    <div className='container mt-5'>
      
      <div className='row '>
        <div className='col-12 col-md-4 col-lg-3'>
          <h1>number of students</h1>
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
          <h1>number of teachers</h1>
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
          <h1>number of Subjects</h1>
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
          <h1>examinations</h1>
        </div>
      </div>
      <Timetableform/>
    </div>
  )
}

export default BoardAdmin
