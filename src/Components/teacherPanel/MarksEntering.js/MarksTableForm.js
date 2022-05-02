import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const MarksTableForm = () => {

  const [studentIds, setStudentIds] = useState([])

  const [student_score, setStudent_score] = useState([""]);
  const [total_score, setTotal_score] = useState([""]);
  const [termId, setTermId] = useState([""]);
  const [studentId, setStudentId] = useState([""]);
  const [subjectCode, setSubjectCode] = useState([""]);
  const [type, setType] = useState([""])

  const onChangeSubjectCode=(e)=>{
    const subjectCode= e.target.value;
    setSubjectCode(subjectCode); 
  }
  const onChangeStudentId=(e)=>{
    const studentId= e.target.value;
    setStudentId(studentId); 
  }
  const onChangeTermId=(e)=>{
    const termId= e.target.value;
    setTermId(termId); 
  }
  const onChangeStudent_score=(e)=>{
    const student_score= e.target.value;
    setStudent_score(student_score); 
  }
  const onChangeTotal_score=(e)=>{
    const total_score= e.target.value;
    setTotal_score(total_score); 
  }
  const onChangeType=(e)=>{
    const type= e.target.value;
    setType(type); 
  }

  const loadStudentIds = async()=>{
    const response = await axios.get(`http://localhost:4000/api/smis/student/subject/BIO1`)
    setStudentIds(response.data)
  }

  useEffect(()=>{
    loadStudentIds();
  },[])

  const enterGrade = (student_score, total_score,studentId,termId,type,subjectCode) =>{
    return axios.post("http://localhost:4000/api/smis/addMark",{
        
      student_score,
      total_score,
      studentId,
      termId,
      type,
      subjectCode
      
    })  
  }
  //handle submit results form events
  const onSubmit = (e) => {
    e.preventDefault()
    enterGrade(
      student_score,
      total_score,
      studentId,
      termId,
      type,
      subjectCode
    ).then(window.location.reload())

  }
  return (
    <div>

      <table>
       
        <tbody>
      
          {studentIds.map((item,index)=>{
            return(
              <tr key={index}>
              <td >
                <input  
                  value={studentId}
                  placeholder={item.studentId}
                  onChange={onChangeStudentId}
                />
              </td>
              <td>
                <select
                  onChange={onChangeType}
                  className="form-control"
                  type="text"
                  value={type}
                  >
                    <option>Exam Type</option>
                    <option>End-Of-Term</option>
                    <option>Assessment</option>
                </select>
              </td>
              <td>
              <select
                  onChange={onChangeTermId}
                  className="form-control"
                  type="text"
                  value={termId}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </td>
              <td>
                <input 
                  type='text'
                  placeholder='obtained Mark'
                  value={student_score}
                  className="form-control"
                  onChange={onChangeStudent_score}
                />
              </td>
              <td>
                <input
                   type='text'
                   placeholder='total marks'
                   value={total_score}
                   className="form-control"
                   onChange={onChangeTotal_score}
                />
              </td>
              </tr>
             
            )
          })}
      
          <tr>
            <td><Button onClick={onSubmit} className="btn btn-primary " > Submit</Button></td>
          </tr>

          
          
        
        </tbody>
      </table>

    </div>
  )
}

export default MarksTableForm
