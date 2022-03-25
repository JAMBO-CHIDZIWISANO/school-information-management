import React from 'react'
import AttendanceForm from './teacherPanel/AttendanceForm'
import AttendanceList from './teacherPanel/AttendanceList'
import EnterMarks from './teacherPanel/EnterMarks'

const BoardTeacher = () => {
  return (
    <div className="container">
      <AttendanceForm/>
      <AttendanceList />
      <EnterMarks/>
    </div>
  )
}

export default BoardTeacher
