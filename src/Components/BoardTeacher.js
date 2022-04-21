//import { FileUpload } from '@mui/icons-material'
//import UploadFile from './teacherPanel/UploadFile'
import TeacherTimeTable from './TeachersDetails/TeacherTimeTable'
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
      <TeacherTimeTable/>
    </div>
  )
}

export default BoardTeacher
