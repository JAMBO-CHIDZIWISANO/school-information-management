import React from 'react'
import Timetableform from './Timetableform'
import WholeTimetable from './WholeTimetable'
const Showtimetable = () => {
  return (
    <div className='container mt-4 mb-5'>
      <div className='mt-4'>
        <Timetableform/>
      </div>
      <div className='mt-4'>
        <WholeTimetable/>
      </div>
       
    </div>
  )
}

export default Showtimetable
