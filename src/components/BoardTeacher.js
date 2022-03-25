import React from 'react'
import AttendanceForm from './teacherPanel/AttendanceForm'
import AttendanceList from './teacherPanel/AttendanceList'
const BoardTeacher = () => {
  return (
    <div className="container">
      <AttendanceForm/>
      <AttendanceList />
    </div>
  )
}

export default BoardTeacher
